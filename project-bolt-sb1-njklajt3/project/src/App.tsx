import { useEffect, useRef, useState, useCallback } from "react";
import { Game, loadSettings, saveSettings, type HudState, type GameSettings } from "./game/Game";
import { MISSIONS, type MissionDef } from "./game/mission/MissionManager";
import type { Track } from "./game/audio/SoundtrackManager";
import { MenuScreen } from "./ui/MenuScreen";
import { Hud } from "./ui/Hud";
import { PauseMenu } from "./ui/PauseMenu";
import { SettingsPanel } from "./ui/SettingsPanel";
import { HowToPlay } from "./ui/HowToPlay";
import { About } from "./ui/About";
import { SoundtrackPanel } from "./ui/SoundtrackPanel";
import { MobileControls } from "./ui/MobileControls";

type Overlay = "none" | "settings" | "soundtrack" | "howto" | "about" | "missionselect";

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<Game | null>(null);
  const [hud, setHud] = useState<HudState | null>(null);
  const [track, setTrack] = useState<Track | null>(null);
  const [overlay, setOverlay] = useState<Overlay>("none");
  const [settings, setSettings] = useState<GameSettings>(() => loadSettings());
  const [isMobile, setIsMobile] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(
      window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 820
    );
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Initialize game once
  useEffect(() => {
    if (!canvasRef.current) return;
    const g = new Game(canvasRef.current, loadSettings());
    gameRef.current = g;
    const unsubHud = g.subscribeHud(setHud);
    const unsubTrack = g.subscribeTrack(setTrack);
    g.init().catch((e) => console.error("Game init failed", e));
    return () => {
      unsubHud();
      unsubTrack();
      g.dispose();
      gameRef.current = null;
    };
  }, []);

  const updateSettings = useCallback((s: GameSettings) => {
    setSettings(s);
    saveSettings(s);
    gameRef.current?.applySettings(s);
  }, []);

  const handlePlay = useCallback((m?: MissionDef) => {
    // Audio must start after user gesture
    if (!audioStarted) {
      gameRef.current?.audio.resume();
      setAudioStarted(true);
    }
    gameRef.current?.startGame(m ?? MISSIONS[0]);
    setOverlay("none");
  }, [audioStarted]);

  const handleSelectMission = useCallback((m: MissionDef) => {
    handlePlay(m);
  }, [handlePlay]);

  const handleResume = useCallback(() => {
    gameRef.current?.setScreen("playing");
  }, []);

  const handleRestart = useCallback(() => {
    gameRef.current?.restartMission();
  }, []);

  const handleToMenu = useCallback(() => {
    gameRef.current?.goToMenu();
    setOverlay("none");
  }, []);

  const handlePause = useCallback(() => {
    gameRef.current?.setScreen("paused");
  }, []);

  const handleSkip = useCallback(() => {
    gameRef.current?.skipTrack();
  }, []);

  const screen = hud?.screen ?? "menu";

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black select-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* Always-on HUD during play */}
      {screen === "playing" && hud && (
        <>
          <Hud hud={hud} track={track} onSkip={handleSkip} onPause={handlePause} />
          {isMobile && (
            <MobileControls
              input={gameRef.current!.input}
            />
          )}
        </>
      )}

      {/* Main menu */}
      {screen === "menu" && (
        <MenuScreen
          onPlay={() => setOverlay("missionselect")}
          onSettings={() => setOverlay("settings")}
          onSoundtrack={() => setOverlay("soundtrack")}
          onHowTo={() => setOverlay("howto")}
          onAbout={() => setOverlay("about")}
          audioStarted={audioStarted}
          onEnableAudio={() => {
            gameRef.current?.audio.resume();
            gameRef.current?.startMenuMusic();
            setAudioStarted(true);
          }}
        />
      )}

      {/* Pause menu */}
      {screen === "paused" && (
        <PauseMenu
          onResume={handleResume}
          onSettings={() => setOverlay("settings")}
          onRestart={handleRestart}
          onMenu={handleToMenu}
        />
      )}

      {/* Overlays */}
      {overlay === "missionselect" && (
        <MissionSelectOverlay onSelect={handleSelectMission} />
      )}
      {overlay === "settings" && (
        <SettingsPanel
          settings={settings}
          onChange={updateSettings}
          onClose={() => setOverlay("none")}
        />
      )}
      {overlay === "soundtrack" && (
        <SoundtrackPanel
          current={track}
          onSkip={handleSkip}
          onClose={() => setOverlay("none")}
          game={gameRef.current}
        />
      )}
      {overlay === "howto" && <HowToPlay onClose={() => setOverlay("none")} />}
      {overlay === "about" && <About onClose={() => setOverlay("none")} />}
    </div>
  );
}

function MissionSelectOverlay({ onSelect }: { onSelect: (m: MissionDef) => void }) {
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-[min(640px,92vw)] rounded-2xl border border-white/10 bg-[#0a0d18]/95 p-6 shadow-2xl">
        <h2 className="text-2xl font-extrabold tracking-widest text-amber-400">SELECT MISSION</h2>
        <div className="mt-4 space-y-3">
          {MISSIONS.map((m) => (
            <button
              key={m.id}
              onClick={() => onSelect(m)}
              className="group flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-left transition hover:border-amber-400/50 hover:bg-amber-400/10"
            >
              <div>
                <div className="text-lg font-bold text-white">{m.name}</div>
                <div className="text-sm text-white/60">{m.description}</div>
              </div>
              <span className="text-amber-400 opacity-0 transition group-hover:opacity-100">PLAY →</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
