import { X, SkipForward, Music2 } from "lucide-react";
import type { Track } from "@/game/audio/SoundtrackManager";
import { TRACKS } from "@/game/audio/SoundtrackManager";
import type { Game } from "@/game/Game";

interface Props {
  current: Track | null;
  onSkip: () => void;
  onClose: () => void;
  game: Game | null;
}

const MOOD_LABELS: Record<string, string> = {
  menu: "Main Menu",
  explore: "City Exploration",
  drive: "Fast Driving",
  sunset: "Sunset",
  night: "Night",
  victory: "Mission Complete",
};

export function SoundtrackPanel({ current, onSkip, onClose, game }: Props) {
  const moods = [...new Set(TRACKS.map((t) => t.mood))];
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-[min(560px,92vw)] rounded-2xl border border-white/10 bg-[#0a0d18]/95 p-6 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold tracking-widest text-amber-400">SOUNDTRACK</h2>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-4 flex items-center justify-between rounded-xl border border-amber-400/20 bg-amber-400/5 p-4">
          <div className="flex items-center gap-3">
            <Music2 className="h-6 w-6 text-amber-400" />
            <div>
              <div className="text-sm text-white/50">Now Playing</div>
              <div className="text-lg font-bold text-white">{current?.title ?? "—"}</div>
              <div className="text-xs text-white/50">{current?.artist ?? ""}</div>
            </div>
          </div>
          <button
            onClick={onSkip}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/20 text-amber-300 transition hover:bg-amber-400/30"
          >
            <SkipForward className="h-5 w-5" />
          </button>
        </div>

        <div className="max-h-[40vh] space-y-4 overflow-y-auto pr-1">
          {moods.map((mood) => (
            <div key={mood}>
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-300/80">
                {MOOD_LABELS[mood] ?? mood}
              </div>
              <div className="space-y-1">
                {TRACKS.filter((t) => t.mood === mood).map((t) => (
                  <button
                    key={t.id}
                    onClick={() => game?.playTrack(t)}
                    className={`flex w-full items-center justify-between rounded-lg border px-4 py-2 text-left transition ${
                      current?.id === t.id
                        ? "border-amber-400 bg-amber-400/10"
                        : "border-white/5 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <div>
                      <div className="text-sm font-semibold text-white">{t.title}</div>
                      <div className="text-xs text-white/40">{t.artist} · {t.config.bpm} BPM</div>
                    </div>
                    {current?.id === t.id && (
                      <span className="text-xs font-bold text-amber-300">PLAYING</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-white/40">
          All tracks are original and synthesized live with the Web Audio API. No copyrighted material is used.
        </p>
      </div>
    </div>
  );
}
