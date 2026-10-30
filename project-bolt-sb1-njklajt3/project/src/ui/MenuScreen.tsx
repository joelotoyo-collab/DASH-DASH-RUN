import { Car, Settings, Music, HelpCircle, Info, Play, Volume2 } from "lucide-react";

interface Props {
  onPlay: () => void;
  onSettings: () => void;
  onSoundtrack: () => void;
  onHowTo: () => void;
  onAbout: () => void;
  audioStarted: boolean;
  onEnableAudio: () => void;
}

export function MenuScreen({
  onPlay, onSettings, onSoundtrack, onHowTo, onAbout,
  audioStarted, onEnableAudio,
}: Props) {
  const items = [
    { label: "PLAY", icon: Play, onClick: onPlay },
    { label: "SETTINGS", icon: Settings, onClick: onSettings },
    { label: "SOUNDTRACK", icon: Music, onClick: onSoundtrack },
    { label: "HOW TO PLAY", icon: HelpCircle, onClick: onHowTo },
    { label: "ABOUT", icon: Info, onClick: onAbout },
  ];

  return (
    <div className="absolute inset-0 z-20 flex flex-col">
      {/* Vignette for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

      <div className="relative flex flex-1 flex-col justify-center px-[8vw]">
        <div className="mb-2 flex items-center gap-3">
          <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-amber-300/80">
            Arcade Driving
          </span>
        </div>
        <h1 className="font-['Orbitron',system-ui,sans-serif] text-7xl font-black leading-none tracking-tight text-white sm:text-8xl md:text-[9rem]">
          AFTER<span className="text-amber-400">HOURS</span>
        </h1>
        <p className="mt-3 text-lg font-light tracking-[0.25em] text-white/70 sm:text-xl">
          THE CITY NEVER SLEEPS.
        </p>

        <div className="mt-10 flex w-[min(320px,80vw)] flex-col gap-3">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <button
                key={it.label}
                onClick={it.onClick}
                className="group flex items-center gap-4 rounded-lg border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm transition hover:border-amber-400/60 hover:bg-amber-400/10"
              >
                <Icon className="h-5 w-5 text-amber-400 transition group-hover:scale-110" />
                <span className="text-lg font-bold tracking-[0.2em] text-white group-hover:text-amber-200">
                  {it.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="relative flex items-center justify-between px-[8vw] pb-6">
        <div className="flex items-center gap-2 text-xs text-white/40">
          <Car className="h-4 w-4" />
          <span>v1.0 · Original Soundtrack · Procedural City</span>
        </div>
        {!audioStarted && (
          <button
            onClick={onEnableAudio}
            className="flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300 transition hover:bg-amber-400/20"
          >
            <Volume2 className="h-4 w-4" />
            Tap to enable sound
          </button>
        )}
      </div>
    </div>
  );
}
