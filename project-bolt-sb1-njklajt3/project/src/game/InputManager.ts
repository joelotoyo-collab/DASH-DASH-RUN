// Centralized input handling for keyboard + touch.
// Exposes a polled state object read each frame by the game loop.

export interface InputState {
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
  handbrake: boolean;
  sprint: boolean;
  interact: boolean; // edge-triggered for enter/exit
  interactPressed: boolean;
  pause: boolean; // edge-triggered
  pausePressed: boolean;
}

type Listener = (state: InputState) => void;

export class InputManager {
  state: InputState = {
    forward: false,
    backward: false,
    left: false,
    right: false,
    handbrake: false,
    sprint: false,
    interact: false,
    interactPressed: false,
    pause: false,
    pausePressed: false,
  };

  private keys = new Set<string>();
  private interactEdge = false;
  private pauseEdge = false;
  private listeners: Listener[] = [];
  private enabled = false;

  enable() {
    if (this.enabled) return;
    this.enabled = true;
    window.addEventListener("keydown", this.onKeyDown);
    window.addEventListener("keyup", this.onKeyUp);
    window.addEventListener("blur", this.onBlur);
  }

  disable() {
    if (!this.enabled) return;
    this.enabled = false;
    window.removeEventListener("keydown", this.onKeyDown);
    window.removeEventListener("keyup", this.onKeyUp);
    window.removeEventListener("blur", this.onBlur);
    this.reset();
  }

  subscribe(fn: Listener) {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== fn);
    };
  }

  // Called by touch UI to set a virtual key.
  setTouch(action: keyof InputState, value: boolean) {
    switch (action) {
      case "forward":
      case "backward":
      case "left":
      case "right":
      case "handbrake":
      case "sprint":
        this.state[action] = value;
        break;
      case "interact":
        if (value && !this.state.interact) this.interactEdge = true;
        this.state.interact = value;
        break;
      case "pause":
        if (value && !this.state.pause) this.pauseEdge = true;
        this.state.pause = value;
        break;
    }
  }

  triggerInteract() {
    this.interactEdge = true;
    this.state.interact = true;
    setTimeout(() => (this.state.interact = false), 50);
  }

  triggerPause() {
    this.pauseEdge = true;
    this.state.pause = true;
    setTimeout(() => (this.state.pause = false), 50);
  }

  // Consume edge-triggered flags at end of frame.
  consumeEdges() {
    this.state.interactPressed = this.interactEdge;
    this.state.pausePressed = this.pauseEdge;
    this.interactEdge = false;
    this.pauseEdge = false;
  }

  private onKeyDown = (e: KeyboardEvent) => {
    const k = e.key.toLowerCase();
    if (
      [
        "w", "a", "s", "d",
        "arrowup", "arrowdown", "arrowleft", "arrowright",
        " ", "shift", "e", "escape",
      ].includes(k)
    ) {
      e.preventDefault();
    }
    if (k === "escape") {
      if (!this.state.pause) this.pauseEdge = true;
      this.state.pause = true;
      return;
    }
    if (k === "e") {
      if (!this.state.interact) this.interactEdge = true;
      this.state.interact = true;
      return;
    }
    this.keys.add(k);
    this.sync();
  };

  private onKeyUp = (e: KeyboardEvent) => {
    const k = e.key.toLowerCase();
    if (k === "escape") {
      this.state.pause = false;
      return;
    }
    if (k === "e") {
      this.state.interact = false;
      return;
    }
    this.keys.delete(k);
    this.sync();
  };

  private onBlur = () => {
    this.keys.clear();
    this.reset();
  };

  private reset() {
    this.state.forward = false;
    this.state.backward = false;
    this.state.left = false;
    this.state.right = false;
    this.state.handbrake = false;
    this.state.sprint = false;
    this.state.interact = false;
    this.state.pause = false;
  }

  private sync() {
    const has = (...ks: string[]) => ks.some((k) => this.keys.has(k));
    this.state.forward = has("w", "arrowup");
    this.state.backward = has("s", "arrowdown");
    this.state.left = has("a", "arrowleft");
    this.state.right = has("d", "arrowright");
    this.state.handbrake = has(" ");
    this.state.sprint = has("shift");
  }
}
