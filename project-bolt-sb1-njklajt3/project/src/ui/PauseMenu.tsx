import { Play, RotateCcw, Settings, Home } from "lucide-react";

interface Props {
  onResume: () => void;
  onSettings: () => void;
  onRestart: () => void;
  onMenu: () => void;
}

export function PauseMenu({ onResume, onSettings, onRestart, onMenu }: Props) {
  const items = [
    { label: "Resume", icon: Play, onClick: onResume },
    { label: "Settings", icon: Settings, onClick: onSettings },
    { label: "Restart Mission", icon: RotateCcw, onClick: onRestart },
    { label: "Main Menu", icon: Home, onClick: onMenu },
  ];
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/70 backdrop-blur-md">
      <div className="w-[min(360px,92vw)] rounded-2xl border border-white/10 bg-[#0a0d18]/95 p-6 shadow-2xl">
        <h2 className="mb-6 text-center font-['Orbitron',sans-serif] text-3xl font-black tracking-widest text-white">
          PAUSED
        </h2>
        <div className="space-y-3">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <button
                key={it.label}
                onClick={it.onClick}
                className="group flex w-full items-center gap-4 rounded-lg border border-white/10 bg-white/5 px-5 py-3 transition hover:border-amber-400/50 hover:bg-amber-400/10"
              >
                <Icon className="h-5 w-5 text-amber-400 transition group-hover:scale-110" />
                <span className="text-lg font-semibold tracking-wider text-white">{it.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
