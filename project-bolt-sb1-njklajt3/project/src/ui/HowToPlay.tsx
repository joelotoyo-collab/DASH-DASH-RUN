import { X } from "lucide-react";

export function HowToPlay({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-[min(560px,92vw)] rounded-2xl border border-white/10 bg-[#0a0d18]/95 p-6 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-extrabold tracking-widest text-amber-400">HOW TO PLAY</h2>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="space-y-4 text-sm text-white/80">
          <Section title="Getting Started">
            Start the City Explorer mission to learn the basics. Your car waits in the garage at the center of the city.
          </Section>
          <Section title="Entering a Vehicle">
            Walk up to the car until the prompt appears, then press <Key>E</Key> to get in. Press <Key>E</Key> again to exit.
          </Section>
          <Section title="Driving">
            Use <Key>W</Key>/<Key>↑</Key> to accelerate and <Key>S</Key>/<Key>↓</Key> to brake or reverse. Steer with <Key>A</Key>/<Key>D</Key>. Hold <Key>Space</Key> for a handbrake to drift through corners.
          </Section>
          <Section title="On Foot">
            Move with <Key>WASD</Key> or arrow keys. Hold <Key>Shift</Key> to sprint. The camera follows you.
          </Section>
          <Section title="Missions">
            Reach glowing markers to complete objectives. In Time Trial, hit every checkpoint before the timer ends.
          </Section>
          <Section title="Music">
            The soundtrack adapts to your driving — relax while cruising, energy picks up at speed. Use the player in the corner to skip tracks.
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-1 font-bold text-amber-300">{title}</div>
      <div className="text-white/70">{children}</div>
    </div>
  );
}

function Key({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="rounded bg-amber-400/20 px-1.5 py-0.5 font-mono text-xs text-amber-200">
      {children}
    </kbd>
  );
}
