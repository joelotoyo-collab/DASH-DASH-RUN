import * as THREE from "three";

export type MissionId = "explorer" | "timetrial" | "freedrive";

export interface MissionDef {
  id: MissionId;
  name: string;
  description: string;
  hasTimer: boolean;
  timeLimit: number; // seconds
  type: "reach" | "checkpoints" | "free";
}

export const MISSIONS: MissionDef[] = [
  {
    id: "explorer",
    name: "City Explorer",
    description: "Drive to the marked destination in the city.",
    hasTimer: true,
    timeLimit: 90,
    type: "reach",
  },
  {
    id: "timetrial",
    name: "Time Trial",
    description: "Hit all 5 checkpoints before the clock runs out.",
    hasTimer: true,
    timeLimit: 75,
    type: "checkpoints",
  },
  {
    id: "freedrive",
    name: "Free Drive",
    description: "Explore the city. No timer, no pressure.",
    hasTimer: false,
    timeLimit: 0,
    type: "free",
  },
];

export interface MissionState {
  def: MissionDef;
  active: boolean;
  completed: boolean;
  timeLeft: number;
  elapsed: number;
  checkpoints: THREE.Vector3[];
  currentCheckpoint: number;
  marker: THREE.Group | null;
  score: number;
}

export class MissionManager {
  scene: THREE.Scene;
  state: MissionState | null = null;
  onUpdate: ((s: MissionState) => void) | null = null;
  onComplete: ((s: MissionState) => void) | null = null;
  private citySpan: number;

  constructor(scene: THREE.Scene, citySpan: number) {
    this.scene = scene;
    this.citySpan = citySpan;
  }

  start(def: MissionDef, startPos: THREE.Vector3) {
    this.clear();
    const checkpoints: THREE.Vector3[] = [];
    let marker: THREE.Group | null = null;

    if (def.type === "reach") {
      // Single destination on far side of city.
      const dest = this.randomRoadPoint();
      checkpoints.push(dest.clone());
      marker = this.makeMarker(dest);
    } else if (def.type === "checkpoints") {
      // 5 checkpoints spread around city.
      for (let i = 0; i < 5; i++) {
        checkpoints.push(this.randomRoadPoint());
      }
      marker = this.makeMarker(checkpoints[0]);
    }

    this.state = {
      def,
      active: true,
      completed: false,
      timeLeft: def.timeLimit,
      elapsed: 0,
      checkpoints,
      currentCheckpoint: 0,
      marker,
      score: 0,
    };
    if (marker) this.scene.add(marker);
    this.onUpdate?.(this.state);
  }

  clear() {
    if (this.state?.marker) {
      this.scene.remove(this.state.marker);
    }
    this.state = null;
  }

  private randomRoadPoint(): THREE.Vector3 {
    const half = this.citySpan / 2;
    // Pick a road coordinate (on grid lines)
    const BLOCK = 48;
    const offset = ((5 - 1) / 2) * BLOCK;
    const i = Math.floor(Math.random() * 6);
    const along = (Math.random() - 0.5) * this.citySpan;
    const horiz = Math.random() > 0.5;
    const x = horiz ? along : i * BLOCK - offset - BLOCK / 2;
    const z = horiz ? i * BLOCK - offset - BLOCK / 2 : along;
    return new THREE.Vector3(x, 0.5, z);
  }

  private makeMarker(pos: THREE.Vector3): THREE.Group {
    const g = new THREE.Group();
    const ring = new THREE.Mesh(
      new THREE.CylinderGeometry(3, 3, 0.3, 24, 1, true),
      new THREE.MeshBasicMaterial({
        color: 0x33ddff,
        transparent: true,
        opacity: 0.85,
        side: THREE.DoubleSide,
      })
    );
    ring.position.y = 0.2;
    ring.rotation.x = Math.PI / 2;
    g.add(ring);
    const beam = new THREE.Mesh(
      new THREE.CylinderGeometry(0.3, 0.6, 40, 12, 1, true),
      new THREE.MeshBasicMaterial({
        color: 0x33ddff,
        transparent: true,
        opacity: 0.25,
        side: THREE.DoubleSide,
      })
    );
    beam.position.y = 20;
    g.add(beam);
    g.position.copy(pos);
    g.position.y = 0;
    return g;
  }

  private updateMarker() {
    if (!this.state?.marker || this.state.checkpoints.length === 0) return;
    const idx = Math.min(this.state.currentCheckpoint, this.state.checkpoints.length - 1);
    const p = this.state.checkpoints[idx];
    this.state.marker.position.set(p.x, 0, p.z);
    // Pulse
    const s = 1 + Math.sin(performance.now() / 250) * 0.08;
    this.state.marker.scale.set(s, 1, s);
  }

  update(dt: number, vehiclePos: THREE.Vector3): { completed: boolean; checkpointHit?: boolean } {
    if (!this.state || !this.state.active) return { completed: false };
    this.updateMarker();

    if (this.state.def.hasTimer) {
      this.state.timeLeft -= dt;
      if (this.state.timeLeft <= 0) {
        this.state.timeLeft = 0;
        this.state.active = false;
        this.state.completed = false;
        this.onUpdate?.(this.state);
        return { completed: false };
      }
    }
    this.state.elapsed += dt;

    // Check checkpoint proximity
    if (this.state.checkpoints.length > 0) {
      const cp = this.state.checkpoints[this.state.currentCheckpoint];
      const dx = vehiclePos.x - cp.x;
      const dz = vehiclePos.z - cp.z;
      if (Math.sqrt(dx * dx + dz * dz) < 6) {
        this.state.currentCheckpoint++;
        this.state.score += this.state.def.type === "reach" ? 500 : 200;
        if (this.state.currentCheckpoint >= this.state.checkpoints.length) {
          this.state.completed = true;
          this.state.active = false;
          this.state.score += this.state.def.hasTimer
            ? Math.floor(this.state.timeLeft) * 10
            : 0;
          this.onUpdate?.(this.state);
          this.onComplete?.(this.state);
          return { completed: true };
        }
        this.onUpdate?.(this.state);
        return { completed: false, checkpointHit: true };
      }
    }

    this.onUpdate?.(this.state);
    return { completed: false };
  }

  pause() {
    // No-op: time is driven by update(dt) and dt becomes 0 when paused.
  }
}
