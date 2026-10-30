import { X } from "lucide-react";

export function About({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-[min(560px,92vw)] rounded-2xl border border-white/10 bg-[#0a0d18]/95 p-6 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold tracking-widest text-amber-400">ABOUT</h2>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-4 text-sm text-white/80">
          <p>
            <span className="font-['Orbitron',sans-serif] text-lg font-black text-white">AFTER<span className="text-amber-400">HOURS</span></span> is an original, browser-based 3D driving game inspired by the freedom and arcade-style action of open-world driving games. The city, the car, the music, and the atmosphere are all original.
          </p>
          <p className="text-white/60">
            Built with Three.js and the Web Audio API. The entire soundtrack is synthesized live in your browser — no external music files. The city is procedurally generated each run with stylized lighting and a cinematic golden-hour or neon-night mood.
          </p>
          <p className="text-white/60">
            This is a playable prototype — the foundation of something bigger. Explore, drive, and enjoy the city that never sleeps.
          </p>
          <p className="pt-2 text-xs text-white/40">
            v1.0 · Original procedural assets · No copyrighted material
          </p>
        </div>
      </div>
    </div>
  );
}
