import { useState, useEffect } from "react";
import type { HudState } from "@/game/Game";
import type { Track } from "@/game/audio/SoundtrackManager";
import { Pause, Music2, SkipForward, Gauge } from "lucide-react";

interface Props {
  hud: HudState;
  track: Track | null;
  onSkip: () => void;
  onPause: () => void;
}

export function Hud({ hud, track, onSkip, onPause }: Props) {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    setShowPrompt(!hud.inVehicle && hud.canEnterVehicle);
  }, [hud.inVehicle, hud.canEnterVehicle]);

  const speed = Math.round(hud.speed);
  const mission = hud.mission;
  const timeLeft = mission?.timeLeft ?? 0;
  const mm = Math.floor(timeLeft / 60);
  const ss = Math.floor(timeLeft % 60);

  return (
    <div className="pointer-events-none absolute inset-0 z-10 font-sans">
      {/* Top bar: mission + timer */}
      {mission && (
        <div className="absolute left-1/2 top-4 -translate-x-1/2 text-center">
          <div className="rounded-xl border border-white/10 bg-black/50 px-6 py-2 backdrop-blur-md">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
              {mission.def.name}
            </div>
            <div className="text-sm text-white/80">{mission.def.description}</div>
          </div>
          {mission.def.hasTimer && (
            <div
              className={`mt-2 inline-block rounded-lg px-4 py-1 font-mono text-2xl font-bold backdrop-blur-md ${
                timeLeft < 15
                  ? "bg-red-500/30 text-red-200"
                  : "bg-black/50 text-white"
              }`}
            >
              {mm}:{ss.toString().padStart(2, "0")}
            </div>
          )}
          {mission.def.type === "checkpoints" && (
            <div className="mt-1 text-xs text-cyan-300">
              Checkpoint {Math.min(mission.currentCheckpoint + 1, mission.checkpoints.length)} / {mission.checkpoints.length}
            </div>
          )}
        </div>
      )}

      {/* Pause button */}
      <button
        onClick={onPause}
        className="pointer-events-auto absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md transition hover:bg-white/10"
        aria-label="Pause"
      >
        <Pause className="h-5 w-5" />
      </button>

      {/* Minimap */}
      {hud.minimapCanvas && (
        <div className="absolute left-4 top-4 h-[140px] w-[140px] overflow-hidden rounded-xl border border-white/10 bg-black/50 backdrop-blur-md sm:h-[160px] sm:w-[160px]">
          <div ref={(el) => {
            if (el && hud.minimapCanvas && el.firstChild !== hud.minimapCanvas) {
              el.appendChild(hud.minimapCanvas);
            }
          }} className="h-full w-full" />
        </div>
      )}

      {/* Speedometer bottom-right */}
      <div className="absolute bottom-6 right-6 flex flex-col items-end">
        <div className="flex items-end gap-1 rounded-2xl border border-white/10 bg-black/50 px-5 py-3 backdrop-blur-md">
          <span className="font-mono text-5xl font-black tabular-nums text-white">
            {speed}
          </span>
          <div className="mb-1 flex flex-col items-start">
            <span className="text-[0.6rem] font-semibold uppercase tracking-widest text-amber-300">KM/H</span>
            <Gauge className="h-4 w-4 text-amber-400" />
          </div>
        </div>
        <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/50">
          {hud.inVehicle ? "Driving" : "On Foot"}
        </div>
      </div>

      {/* Music player bottom-left */}
      <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-md">
        <Music2 className="h-5 w-5 text-amber-400" />
        <div className="min-w-0">
          <div className="max-w-[160px] truncate text-sm font-semibold text-white">
            {track?.title ?? "—"}
          </div>
          <div className="max-w-[160px] truncate text-xs text-white/50">
            {track?.artist ?? ""}
          </div>
        </div>
        <button
          onClick={onSkip}
          className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-amber-400/30"
          aria-label="Skip track"
        >
          <SkipForward className="h-4 w-4" />
        </button>
      </div>

      {/* Enter vehicle prompt */}
      {showPrompt && (
        <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-lg border border-amber-400/50 bg-black/70 px-5 py-2 backdrop-blur-md">
          <span className="text-sm font-semibold text-amber-300">
            Press <kbd className="rounded bg-amber-400/20 px-2 py-0.5 font-mono text-amber-200">E</kbd> to enter vehicle
          </span>
        </div>
      )}
    </div>
  );
}
