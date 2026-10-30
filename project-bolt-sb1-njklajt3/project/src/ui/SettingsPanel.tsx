import { X } from "lucide-react";
import type { GameSettings } from "@/game/Game";

interface Props {
  settings: GameSettings;
  onChange: (s: GameSettings) => void;
  onClose: () => void;
}

export function SettingsPanel({ settings, onChange, onClose }: Props) {
  const update = (patch: Partial<GameSettings>) =>
    onChange({ ...settings, ...patch });

  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-[min(560px,92vw)] rounded-2xl border border-white/10 bg-[#0a0d18]/95 p-6 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold tracking-widest text-amber-400">SETTINGS</h2>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-5">
          {/* Master volume */}
          <Slider
            label="Master Volume"
            value={settings.masterVolume}
            onChange={(v) => update({ masterVolume: v })}
          />
          <Slider
            label="Music Volume"
            value={settings.musicVolume}
            onChange={(v) => update({ musicVolume: v })}
          />
          <Slider
            label="Sound Effects"
            value={settings.sfxVolume}
            onChange={(v) => update({ sfxVolume: v })}
          />

          {/* Music toggle */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-white/80">Music</span>
            <button
              onClick={() => update({ musicEnabled: !settings.musicEnabled })}
              className={`relative h-7 w-14 rounded-full transition ${
                settings.musicEnabled ? "bg-amber-400" : "bg-white/15"
              }`}
            >
              <span
                className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition ${
                  settings.musicEnabled ? "left-7" : "left-0.5"
                }`}
              />
            </button>
          </div>

          {/* Graphics quality */}
          <div>
            <span className="text-sm font-semibold text-white/80">Graphics Quality</span>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {(["low", "medium", "high"] as const).map((q) => (
                <button
                  key={q}
                  onClick={() => update({ quality: q })}
                  className={`rounded-lg border px-3 py-2 text-sm font-semibold capitalize transition ${
                    settings.quality === q
                      ? "border-amber-400 bg-amber-400/20 text-amber-200"
                      : "border-white/10 bg-white/5 text-white/60 hover:bg-white/10"
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Time of day */}
          <div>
            <span className="text-sm font-semibold text-white/80">Time of Day</span>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {(["sunset", "night"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => onChange({ ...settings, timeOfDay: t })}
                  className={`rounded-lg border px-3 py-2 text-sm font-semibold capitalize transition ${
                    settings.timeOfDay === t
                      ? "border-amber-400 bg-amber-400/20 text-amber-200"
                      : "border-white/10 bg-white/5 text-white/60 hover:bg-white/10"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Controls help */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-2 text-sm font-bold text-amber-300">Controls</div>
            <div className="grid grid-cols-2 gap-y-1 text-xs text-white/70">
              <span>W / ↑</span><span>Accelerate / forward</span>
              <span>S / ↓</span><span>Brake / reverse</span>
              <span>A / ←</span><span>Steer left</span>
              <span>D / →</span><span>Steer right</span>
              <span>E</span><span>Enter / exit vehicle</span>
              <span>Space</span><span>Handbrake</span>
              <span>Shift</span><span>Sprint (on foot)</span>
              <span>Esc</span><span>Pause</span>
            </div>
            <div className="mt-2 text-xs text-white/40">
              Mobile: on-screen buttons appear automatically.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slider({
  label, value, onChange,
}: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-white/80">{label}</span>
        <span className="font-mono text-xs text-amber-300">{Math.round(value * 100)}%</span>
      </div>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="mt-2 w-full accent-amber-400"
      />
    </div>
  );
}
