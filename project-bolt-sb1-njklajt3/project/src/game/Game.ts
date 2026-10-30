import * as THREE from "three";
import { InputManager } from "./InputManager";
import { buildCity, buildSky, type WorldData } from "./world/City";
import { Vehicle } from "./vehicle/Vehicle";
import { Player } from "./player/Player";
import { FollowCamera } from "./FollowCamera";
import { MissionManager, MISSIONS, type MissionDef, type MissionState } from "./mission/MissionManager";
import { Minimap } from "./ui/Minimap";
import { AudioEngine } from "./audio/AudioEngine";
import { SoundtrackManager, type Mood, type Track } from "./audio/SoundtrackManager";

export type GameScreen = "menu" | "playing" | "paused";

export interface HudState {
  screen: GameScreen;
  speed: number;
  inVehicle: boolean;
  canEnterVehicle: boolean;
  mission: MissionState | null;
  minimapCanvas: HTMLCanvasElement | null;
  track: Track | null;
  timeOfDay: "sunset" | "night";
}

export interface GameSettings {
  masterVolume: number;
  musicVolume: number;
  sfxVolume: number;
  musicEnabled: boolean;
  quality: "low" | "medium" | "high";
  timeOfDay: "sunset" | "night";
}

const DEFAULT_SETTINGS: GameSettings = {
  masterVolume: 0.8,
  musicVolume: 0.6,
  sfxVolume: 0.7,
  musicEnabled: true,
  quality: "medium",
  timeOfDay: "sunset",
};

const SETTINGS_KEY = "afterhours.settings";

export function loadSettings(): GameSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    // ignore
  }
  return { ...DEFAULT_SETTINGS };
}

export function saveSettings(s: GameSettings) {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
  } catch {
    // ignore
  }
}

export class Game {
  canvas: HTMLCanvasElement;
  renderer!: THREE.WebGLRenderer;
  scene!: THREE.Scene;
  world!: WorldData;
  vehicle!: Vehicle;
  player!: Player;
  camera!: FollowCamera;
  input: InputManager;
  audio: AudioEngine;
  soundtrack: SoundtrackManager;
  missions!: MissionManager;
  minimap!: Minimap;

  private rafId: number | null = null;
  private lastTime = 0;
  private clock = new THREE.Clock();

  screen: GameScreen = "menu";
  inVehicle = false;
  private prevInVehicle = false;
  private canEnter = false;

  private hudListeners: ((s: HudState) => void)[] = [];
  private currentMissionDef: MissionDef = MISSIONS[0];

  settings: GameSettings;

  constructor(canvas: HTMLCanvasElement, settings: GameSettings) {
    this.canvas = canvas;
    this.settings = settings;
    this.input = new InputManager();
    this.audio = new AudioEngine();
    this.soundtrack = new SoundtrackManager(this.audio);
  }

  subscribeHud(fn: (s: HudState) => void) {
    this.hudListeners.push(fn);
    return () => {
      this.hudListeners = this.hudListeners.filter((l) => l !== fn);
    };
  }

  subscribeTrack(fn: (t: Track | null) => void) {
    return this.soundtrack.subscribe(fn);
  }

  // ---------- Lifecycle ----------
  async init() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: this.settings.quality !== "low",
      powerPreference: "high-performance",
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.settings.quality === "high" ? 2 : 1.25));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = this.settings.quality !== "low";
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;

    this.scene = new THREE.Scene();
    buildSky(this.scene, this.settings.timeOfDay);

    this.world = buildCity(this.settings.quality);
    this.scene.add(this.world.group);

    this.camera = new FollowCamera(window.innerWidth / window.innerHeight);
    this.camera.mode = "foot";

    // Vehicle at garage
    this.vehicle = new Vehicle();
    this.vehicle.pos.copy(this.world.garage);
    this.vehicle.pos.z += 3;
    this.vehicle.pos.y = 0;
    this.vehicle.group.position.copy(this.vehicle.pos);
    this.vehicle.setOccupied(false);
    this.scene.add(this.vehicle.group);

    // Player on foot near garage
    this.player = new Player();
    this.player.setPosition(new THREE.Vector3(this.world.garage.x + 3, 0, this.world.garage.z + 3));
    this.scene.add(this.player.group);

    this.missions = new MissionManager(this.scene, 5 * 48);
    this.minimap = new Minimap(this.world.colliders, 5 * 48, this.world.garage);

    window.addEventListener("resize", this.onResize);

    await this.audio.init();
    this.applySettings(this.settings);

    this.input.enable();
    this.input.subscribe(this.onInput);

    // Try starting menu music. Browsers may block until a user gesture,
    // in which case audio resumes on first PLAY / enable-sound press.
    this.startMenuMusic();

    this.loop();
    this.emitHud();
  }

  dispose() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    this.input.disable();
    this.audio.stopEngine();
    this.audio.stopAllMusic();
    window.removeEventListener("resize", this.onResize);
    this.renderer?.dispose();
  }

  applySettings(s: GameSettings) {
    this.settings = s;
    this.audio.setMasterVolume(s.masterVolume);
    this.audio.setMusicVolume(s.musicVolume);
    this.audio.setSfxVolume(s.sfxVolume);
    this.audio.setMusicEnabled(s.musicEnabled);
    if (this.renderer) {
      this.renderer.shadowMap.enabled = s.quality !== "low";
      const pr = s.quality === "high" ? 2 : 1.25;
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, pr));
    }
    if (this.world) this.world.setQuality(s.quality);
    saveSettings(s);
  }

  setScreen(screen: GameScreen) {
    const prev = this.screen;
    this.screen = screen;
    if (screen === "playing") {
      this.audio.resume();
      this.lastTime = performance.now();
    }
    if (screen === "paused" && prev === "playing") {
      this.soundtrack.pause();
    }
    if (screen === "playing" && prev === "paused") {
      this.soundtrack.resume();
    }
    this.emitHud();
  }

  // ---------- Flow control ----------
  startGame(missionDef: MissionDef = MISSIONS[0]) {
    this.currentMissionDef = missionDef;
    this.audio.resume();
    this.audio.playSfx("menu", { volume: 0.5 });
    // place vehicle + player at garage
    this.vehicle.pos.copy(this.world.garage);
    this.vehicle.pos.z += 3;
    this.vehicle.speed = 0;
    this.vehicle.group.position.copy(this.vehicle.pos);
    this.vehicle.setOccupied(false);
    this.inVehicle = false;
    this.player.setPosition(new THREE.Vector3(this.world.garage.x + 3, 0, this.world.garage.z + 3));

    this.missions.start(missionDef, this.vehicle.pos);
    this.startSoundtrackFor(missionDef);
    this.setScreen("playing");
    this.lastTime = performance.now();
  }

  restartMission() {
    this.startGame(this.currentMissionDef);
  }

  goToMenu() {
    this.missions.clear();
    this.audio.stopEngine();
    this.setScreen("menu");
    this.startMenuMusic();
  }

  private startMenuMusic() {
    if (!this.settings.musicEnabled) return;
    this.audio.resume();
    this.soundtrack.setMood("menu", { force: true });
  }

  private startSoundtrackFor(m: MissionDef) {
    if (!this.settings.musicEnabled) return;
    let mood: Mood = "explore";
    if (m.id === "freedrive") mood = this.settings.timeOfDay === "night" ? "night" : "explore";
    else mood = "drive";
    this.soundtrack.setMood(mood, { force: true });
  }

  // ---------- Pause handling ----------
  private handlePauseInput() {
    if (this.input.state.pausePressed) {
      if (this.screen === "playing") this.setScreen("paused");
      else if (this.screen === "paused") this.setScreen("playing");
    }
  }

  // ---------- Main loop ----------
  private loop = () => {
    this.rafId = requestAnimationFrame(this.loop);
    const dt = Math.min(0.05, this.clock.getDelta());
    const playing = this.screen === "playing";

    this.handlePauseInput();

    if (playing) {
      this.updateGame(dt);
    }

    // Always render (even paused/menu shows world behind)
    if (this.screen === "menu" || this.screen === "paused") {
      // Slowly rotate camera around city for cinematic backdrop
      this.menuCamSpin(dt);
    } else {
      this.camera.follow(
        this.inVehicle ? this.vehicle.pos : this.player.pos,
        this.inVehicle ? this.vehicle.rot : this.player.rot,
        dt
      );
    }

    this.renderer.render(this.scene, this.camera.cam);

    if (playing) this.emitHud();
    this.input.consumeEdges();
  };

  private menuAngle = 0;
  private menuRadius = 40;
  private menuTarget = new THREE.Vector3();
  private menuCamPos = new THREE.Vector3();
  private menuCamSpin(dt: number) {
    this.menuAngle += dt * 0.08;
    const x = Math.cos(this.menuAngle) * this.menuRadius;
    const z = Math.sin(this.menuAngle) * this.menuRadius;
    this.menuCamPos.set(x, 14, z);
    this.camera.cam.position.lerp(this.menuCamPos, Math.min(1, dt * 1.5));
    this.menuTarget.set(0, 2, 0);
    this.camera.cam.lookAt(this.menuTarget);
    // also rotate the vehicle a bit for life
    this.vehicle.group.rotation.y += dt * 0.3;
  }

  private updateGame(dt: number) {
    // Enter/exit vehicle
    if (this.input.state.interactPressed) {
      if (this.inVehicle) {
        this.exitVehicle();
      } else if (this.canEnter) {
        this.enterVehicle();
      }
    }

    if (this.inVehicle) {
      this.vehicle.update(dt, this.input.state, this.world.colliders);
      this.audio.updateEngine(Math.abs(this.vehicle.speed) / this.vehicle.maxSpeed, this.input.state.forward ? 1 : 0);
      if (this.vehicle.hitThisFrame()) {
        this.audio.playSfx("collision", { volume: 0.7 });
      }
      if (this.input.state.handbrake && Math.abs(this.vehicle.speed) > 8) {
        if (Math.random() < 0.1) this.audio.playSfx("tire", { volume: 0.4 });
      }
      // Mood: drive fast -> drive music
      const fast = Math.abs(this.vehicle.speed) > 18;
      if (fast) this.soundtrack.setMood("drive");
      else this.soundtrack.setMood("explore");
    } else {
      this.player.update(dt, this.input.state, this.camera.yaw);
      this.audio.updateEngine(0, 0);
    }

    // Proximity check for enter prompt
    if (!this.inVehicle) {
      const dx = this.player.pos.x - this.vehicle.pos.x;
      const dz = this.player.pos.z - this.vehicle.pos.z;
      const d = Math.sqrt(dx * dx + dz * dz);
      this.canEnter = d < 4;
    } else {
      this.canEnter = false;
    }

    // Mission update
    if (this.missions.state?.active) {
      const refPos = this.inVehicle ? this.vehicle.pos : this.player.pos;
      const r = this.missions.update(dt, refPos);
      if (r.checkpointHit) {
        this.audio.playSfx("mission", { volume: 0.5 });
      }
      if (r.completed) {
        this.audio.playSfx("mission", { volume: 0.8 });
        this.soundtrack.setMood("victory", { force: true });
      }
    }
  }

  private enterVehicle() {
    this.inVehicle = true;
    this.vehicle.setOccupied(true);
    this.camera.mode = "drive";
    this.audio.playSfx("enter", { volume: 0.6 });
    this.audio.startEngine();
    // snap player into car (hide visual by moving under)
    this.player.group.visible = false;
  }

  private exitVehicle() {
    this.inVehicle = false;
    this.vehicle.setOccupied(false);
    this.vehicle.speed = 0;
    this.camera.mode = "foot";
    this.audio.playSfx("exit", { volume: 0.6 });
    this.audio.stopEngine();
    // place player beside car
    const cos = Math.cos(this.vehicle.rot);
    const sin = Math.sin(this.vehicle.rot);
    this.player.pos.set(
      this.vehicle.pos.x + cos * 2.2,
      0,
      this.vehicle.pos.z - sin * 2.2
    );
    this.player.group.visible = true;
  }

  private onInput = () => {
    // Edge-triggered handled in loop via state flags.
  };

  private onResize = () => {
    if (!this.renderer || !this.camera) return;
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.setAspect(window.innerWidth / window.innerHeight);
  };

  private emitHud() {
    let cpPositions: THREE.Vector3[] | null = null;
    if (this.missions.state) {
      cpPositions = this.missions.state.checkpoints;
    }
    // update minimap
    if (this.minimap) {
      const refPos = this.inVehicle ? this.vehicle.pos : this.player.pos;
      const refRot = this.inVehicle ? this.vehicle.rot : this.player.rot;
      const markerP = this.missions?.state?.marker
        ? this.missions.state.checkpoints[Math.min(this.missions.state.currentCheckpoint, this.missions.state.checkpoints.length - 1)] || null
        : null;
      this.minimap.draw(refPos, refRot, markerP, cpPositions, this.missions?.state?.currentCheckpoint ?? 0);
    }
    const hud: HudState = {
      screen: this.screen,
      speed: this.vehicle ? this.vehicle.getSpeedKmh() : 0,
      inVehicle: this.inVehicle,
      canEnterVehicle: this.canEnter,
      mission: this.missions?.state ?? null,
      minimapCanvas: this.minimap?.canvas ?? null,
      track: this.soundtrack.currentTrack,
      timeOfDay: this.settings.timeOfDay,
    };
    this.hudListeners.forEach((l) => l(hud));
  }

  // Exposed for UI to trigger
  skipTrack() {
    this.soundtrack.skip();
  }
  playTrack(track: Track) {
    this.audio.resume();
    if (!this.settings.musicEnabled) {
      this.settings.musicEnabled = true;
      this.audio.setMusicEnabled(true);
    }
    this.soundtrack.playTrack(track);
  }
  setMood(mood: Mood) {
    this.soundtrack.setMood(mood, { force: true });
  }
}
