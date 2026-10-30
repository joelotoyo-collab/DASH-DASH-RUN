import { useEffect, useRef } from "react";
import type { InputManager } from "@/game/InputManager";

interface Props {
  input: InputManager;
}

export function MobileControls({ input }: Props) {
  const active = useRef<Set<string>>(new Set());

  const press = (action: Parameters<InputManager["setTouch"]>[0], id: string) => {
    active.current.add(id);
    input.setTouch(action, true);
  };
  const release = (action: Parameters<InputManager["setTouch"]>[0], id: string) => {
    active.current.delete(id);
    input.setTouch(action, false);
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      active.current.forEach((id) => {
        // best effort release
      });
      input.setTouch("forward", false);
      input.setTouch("backward", false);
      input.setTouch("left", false);
      input.setTouch("right", false);
      input.setTouch("handbrake", false);
    };
  }, [input]);

  const btn = (
    action: Parameters<InputManager["setTouch"]>[0],
    id: string,
    label: string,
    cls: string
  ) => (
    <button
      className={`pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full border-2 text-lg font-bold backdrop-blur-md transition active:scale-95 ${cls}`}
      onTouchStart={(e) => { e.preventDefault(); press(action, id); }}
      onTouchEnd={(e) => { e.preventDefault(); release(action, id); }}
      onTouchCancel={(e) => { e.preventDefault(); release(action, id); }}
      onContextMenu={(e) => e.preventDefault()}
    >
      {label}
    </button>
  );

  return (
    <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between px-4 pb-4 sm:hidden">
      {/* Left side: steering */}
      <div className="flex gap-3">
        {btn("left", "ml", "◀", "border-white/20 bg-black/50 text-white")}
        {btn("right", "mr", "▶", "border-white/20 bg-black/50 text-white")}
      </div>
      {/* Right side: gas/brake + actions */}
      <div className="flex flex-col items-end gap-3">
        <div className="flex gap-3">
          <button
            className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-amber-400/50 bg-amber-400/20 text-amber-200 backdrop-blur-md transition active:scale-95"
            onTouchStart={(e) => { e.preventDefault(); input.triggerInteract(); }}
            onContextMenu={(e) => e.preventDefault()}
          >
            IN/OUT
          </button>
          <button
            className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/20 bg-black/50 text-white/80 backdrop-blur-md transition active:scale-95"
            onTouchStart={(e) => { e.preventDefault(); input.triggerPause(); }}
            onContextMenu={(e) => e.preventDefault()}
          >
            ❚❚
          </button>
        </div>
        <div className="flex gap-3">
          {btn("backward", "bk", "▼", "border-red-400/40 bg-red-500/20 text-red-200")}
          {btn("forward", "fw", "▲", "border-emerald-400/40 bg-emerald-500/20 text-emerald-200")}
        </div>
      </div>
    </div>
  );
}
