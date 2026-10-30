// Web Audio API engine for synthesized music + sound effects.
// All audio is generated procedurally — no external files required.

type SfxName =
  | "engine"
  | "brake"
  | "tire"
  | "collision"
  | "enter"
  | "exit"
  | "menu"
  | "mission";

export class AudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain!: GainNode;
  private musicGain!: GainNode;
  private sfxGain!: GainNode;

  // Persistent engine sound
  private engineOsc: OscillatorNode | null = null;
  private engineGain: GainNode | null = null;
  private engineFilter: BiquadFilterNode | null = null;

  private masterVolume = 0.8;
  private musicVolume = 0.6;
  private sfxVolume = 0.7;
  musicEnabled = true;

  // Currently active musical loops
  private activeTracks: Map<string, { stop: () => void }> = new Map();

  ready = false;

  async init() {
    if (this.ready) return;
    try {
      const Ctor =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      this.ctx = new Ctor();
      this.masterGain = this.ctx.createGain();
      this.musicGain = this.ctx.createGain();
      this.sfxGain = this.ctx.createGain();
      this.masterGain.connect(this.ctx.destination);
      this.musicGain.connect(this.masterGain);
      this.sfxGain.connect(this.masterGain);
      this.applyVolumes();
      this.ready = true;
    } catch {
      this.ready = false;
    }
  }

  resume() {
    if (this.ctx && this.ctx.state === "suspended") this.ctx.resume();
  }

  setMasterVolume(v: number) {
    this.masterVolume = v;
    this.applyVolumes();
  }
  setMusicVolume(v: number) {
    this.musicVolume = v;
    this.applyVolumes();
  }
  setSfxVolume(v: number) {
    this.sfxVolume = v;
    this.applyVolumes();
  }

  private applyVolumes() {
    if (!this.ready) return;
    this.masterGain.gain.value = this.masterVolume;
    this.musicGain.gain.value = this.musicEnabled ? this.musicVolume : 0;
    this.sfxGain.gain.value = this.sfxVolume;
  }

  setMusicEnabled(on: boolean) {
    this.musicEnabled = on;
    this.applyVolumes();
  }

  // ---------- SFX ----------
  playSfx(name: SfxName, opts: { volume?: number; freq?: number } = {}) {
    if (!this.ready || !this.ctx) return;
    const ctx = this.ctx;
    const vol = opts.volume ?? 1;
    const now = ctx.currentTime;

    const env = (g: GainNode, peak: number, attack: number, release: number) => {
      g.gain.setValueAtTime(0, now);
      g.gain.linearRampToValueAtTime(peak, now + attack);
      g.gain.exponentialRampToValueAtTime(0.0001, now + attack + release);
    };

    const tone = (
      freq: number,
      type: OscillatorType,
      peak: number,
      attack: number,
      release: number,
      dest: AudioNode
    ) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = type;
      o.frequency.setValueAtTime(freq, now);
      env(g, peak, attack, release);
      o.connect(g);
      g.connect(dest);
      o.start(now);
      o.stop(now + attack + release + 0.05);
    };

    const dest = this.sfxGain;

    switch (name) {
      case "menu": {
        tone(660, "sine", 0.3 * vol, 0.005, 0.12, dest);
        tone(990, "sine", 0.15 * vol, 0.01, 0.18, dest);
        break;
      }
      case "mission": {
        tone(523, "triangle", 0.3 * vol, 0.01, 0.2, dest);
        setTimeout(() => this.ready && tone(659, "triangle", 0.3 * vol, 0.01, 0.2, dest), 120);
        setTimeout(() => this.ready && tone(784, "triangle", 0.35 * vol, 0.01, 0.4, dest), 260);
        break;
      }
      case "enter": {
        tone(220, "sawtooth", 0.2 * vol, 0.01, 0.15, dest);
        setTimeout(() => this.ready && tone(330, "sawtooth", 0.18 * vol, 0.01, 0.12, dest), 80);
        break;
      }
      case "exit": {
        tone(330, "sawtooth", 0.2 * vol, 0.01, 0.12, dest);
        setTimeout(() => this.ready && tone(220, "sawtooth", 0.18 * vol, 0.01, 0.15, dest), 80);
        break;
      }
      case "brake": {
        const noise = this.makeNoise(0.25 * vol);
        const g = ctx.createGain();
        const f = ctx.createBiquadFilter();
        f.type = "bandpass";
        f.frequency.value = 1200;
        g.gain.setValueAtTime(0.25 * vol, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        noise.connect(f);
        f.connect(g);
        g.connect(dest);
        noise.start(now);
        noise.stop(now + 0.3);
        break;
      }
      case "tire": {
        const noise = this.makeNoise(0.15 * vol);
        const g = ctx.createGain();
        const f = ctx.createBiquadFilter();
        f.type = "highpass";
        f.frequency.value = 2000;
        g.gain.setValueAtTime(0.12 * vol, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        noise.connect(f);
        f.connect(g);
        g.connect(dest);
        noise.start(now);
        noise.stop(now + 0.25);
        break;
      }
      case "collision": {
        const noise = this.makeNoise(0.5 * vol);
        const g = ctx.createGain();
        const f = ctx.createBiquadFilter();
        f.type = "lowpass";
        f.frequency.value = 400;
        g.gain.setValueAtTime(0.5 * vol, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        noise.connect(f);
        f.connect(g);
        g.connect(dest);
        noise.start(now);
        noise.stop(now + 0.4);
        tone(80, "square", 0.3 * vol, 0.005, 0.2, dest);
        break;
      }
    }
  }

  private makeNoise(vol: number): AudioBufferSourceNode {
    const ctx = this.ctx!;
    const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.4, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * vol;
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    return src;
  }

  // ---------- Engine loop ----------
  startEngine() {
    if (!this.ready || !this.ctx || this.engineOsc) return;
    const ctx = this.ctx;
    this.engineOsc = ctx.createOscillator();
    this.engineGain = ctx.createGain();
    this.engineFilter = ctx.createBiquadFilter();
    this.engineOsc.type = "sawtooth";
    this.engineOsc.frequency.value = 60;
    this.engineFilter.type = "lowpass";
    this.engineFilter.frequency.value = 600;
    this.engineGain.gain.value = 0;
    this.engineOsc.connect(this.engineFilter);
    this.engineFilter.connect(this.engineGain);
    this.engineGain.connect(this.sfxGain);
    this.engineOsc.start();
  }

  updateEngine(speed01: number, throttle: number) {
    if (!this.ready || !this.engineOsc || !this.engineGain || !this.engineFilter)
      return;
    const ctx = this.ctx!;
    const baseFreq = 55 + speed01 * 220;
    const targetGain = 0.05 + throttle * 0.12;
    const targetFilter = 500 + speed01 * 1800;
    this.engineOsc.frequency.setTargetAtTime(baseFreq, ctx.currentTime, 0.08);
    this.engineGain.gain.setTargetAtTime(targetGain, ctx.currentTime, 0.1);
    this.engineFilter.frequency.setTargetAtTime(targetFilter, ctx.currentTime, 0.1);
  }

  stopEngine() {
    if (this.engineOsc) {
      try {
        this.engineOsc.stop();
      } catch {
        // already stopped
      }
      this.engineOsc.disconnect();
      this.engineGain?.disconnect();
      this.engineFilter?.disconnect();
      this.engineOsc = null;
      this.engineGain = null;
      this.engineFilter = null;
    }
  }

  // ---------- Music ----------
  // Each track is a set of looping oscillators + patterns.
  stopAllMusic() {
    this.activeTracks.forEach((t) => t.stop());
    this.activeTracks.clear();
  }

  fadeOutMusic(id: string, duration = 1.5) {
    const t = this.activeTracks.get(id);
    if (t) {
      t.stop();
      this.activeTracks.delete(id);
    }
  }

  isTrackPlaying(id: string) {
    return this.activeTracks.has(id);
  }

  // Play a looping musical bed. Returns a stop function.
  playMusicTrack(
    id: string,
    config: {
      bpm: number;
      // chord progression as semitone offsets from a root
      chords: number[][];
      root: number; // midi note
      lead: boolean; // include lead melody
      drums: boolean; // include drum pattern
      bass: boolean;
      pad: boolean;
    }
  ): void {
    if (!this.ready || !this.ctx) return;
    if (this.activeTracks.has(id)) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const beat = 60 / config.bpm;

    // Master bus for this track (so we can fade)
    const bus = ctx.createGain();
    bus.gain.value = 0;
    bus.connect(this.musicGain);
    bus.gain.setTargetAtTime(0.85, now, 0.8);

    const oscs: OscillatorNode[] = [];
    const sources: AudioBufferSourceNode[] = [];
    let stopped = false;
    let schedTimer: number | null = null;

    const midiToFreq = (m: number) => 440 * Math.pow(2, (m - 69) / 12);

    // Schedule chords progression as pad + bass.
    let chordIndex = 0;
    const scheduleChord = (when: number) => {
      const chord = config.chords[chordIndex % config.chords.length];
      chordIndex++;
      const dur = beat * 4;
      // Pad
      if (config.pad) {
        for (const semi of chord) {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.type = "sine";
          o.frequency.value = midiToFreq(config.root + semi);
          g.gain.setValueAtTime(0, when);
          g.gain.linearRampToValueAtTime(0.06, when + 0.6);
          g.gain.setValueAtTime(0.06, when + dur - 0.6);
          g.gain.linearRampToValueAtTime(0, when + dur);
          o.connect(g);
          g.connect(bus);
          o.start(when);
          o.stop(when + dur + 0.1);
          oscs.push(o);
        }
      }
      // Bass
      if (config.bass) {
        const note = config.root + chord[0] - 12;
        for (let i = 0; i < 4; i++) {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.type = "triangle";
          o.frequency.value = midiToFreq(note - 12);
          const t = when + i * beat;
          g.gain.setValueAtTime(0, t);
          g.gain.linearRampToValueAtTime(0.16, t + 0.02);
          g.gain.exponentialRampToValueAtTime(0.001, t + beat * 0.8);
          o.connect(g);
          g.connect(bus);
          o.start(t);
          o.stop(t + beat + 0.05);
          oscs.push(o);
        }
      }
    };

    // Lead melody: random walk over a pentatonic scale.
    const penta = [0, 3, 5, 7, 10];
    let leadStep = 0;
    const scheduleLead = (when: number) => {
      if (!config.lead) return;
      const steps = 8;
      for (let i = 0; i < steps; i++) {
        if (Math.random() < 0.35) continue;
        leadStep += Math.floor((Math.random() - 0.5) * 4);
        leadStep = Math.max(0, Math.min(14, leadStep));
        const octave = Math.floor(leadStep / 5) * 12;
        const note = config.root + 12 + octave + penta[leadStep % 5];
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = "triangle";
        o.frequency.value = midiToFreq(note);
        const t = when + (i / steps) * beat * 4;
        const d = (beat * 4) / steps;
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.07, t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.001, t + d * 0.9);
        o.connect(g);
        g.connect(bus);
        o.start(t);
        o.stop(t + d + 0.05);
        oscs.push(o);
      }
    };

    // Drums: kick + hat synthesized.
    const kick = (when: number, vol: number) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.frequency.setValueAtTime(140, when);
      o.frequency.exponentialRampToValueAtTime(40, when + 0.12);
      g.gain.setValueAtTime(vol, when);
      g.gain.exponentialRampToValueAtTime(0.001, when + 0.18);
      o.connect(g);
      g.connect(bus);
      o.start(when);
      o.stop(when + 0.2);
      oscs.push(o);
    };
    const hat = (when: number, vol: number) => {
      const buf = ctx.createBuffer(1, 0.05 * ctx.sampleRate, ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * vol;
      const src = ctx.createBufferSource();
      src.buffer = buf;
      const f = ctx.createBiquadFilter();
      f.type = "highpass";
      f.frequency.value = 6000;
      const g = ctx.createGain();
      g.gain.setValueAtTime(vol, when);
      g.gain.exponentialRampToValueAtTime(0.001, when + 0.04);
      src.connect(f);
      f.connect(g);
      g.connect(bus);
      src.start(when);
      sources.push(src);
    };
    const snare = (when: number, vol: number) => {
      const buf = ctx.createBuffer(1, 0.15 * ctx.sampleRate, ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * vol;
      const src = ctx.createBufferSource();
      src.buffer = buf;
      const f = ctx.createBiquadFilter();
      f.type = "bandpass";
      f.frequency.value = 1800;
      const g = ctx.createGain();
      g.gain.setValueAtTime(vol, when);
      g.gain.exponentialRampToValueAtTime(0.001, when + 0.12);
      src.connect(f);
      f.connect(g);
      g.connect(bus);
      src.start(when);
      sources.push(src);
    };

    const scheduleDrums = (when: number) => {
      if (!config.drums) return;
      const steps = 8;
      for (let i = 0; i < steps; i++) {
        const t = when + (i / steps) * beat * 4;
        if (i % 2 === 0) kick(t, 0.5);
        if (i === 4) snare(t, 0.3);
        hat(t, 0.12);
      }
    };

    // Scheduler loop — schedule one bar ahead.
    const barLen = beat * 4;
    let nextBar = now + 0.1;
    const tick = () => {
      if (stopped) return;
      while (nextBar < ctx.currentTime + 0.5) {
        scheduleChord(nextBar);
        scheduleLead(nextBar);
        scheduleDrums(nextBar);
        nextBar += barLen;
      }
      schedTimer = window.setTimeout(tick, 200);
    };
    tick();

    const stop = () => {
      if (stopped) return;
      stopped = true;
      if (schedTimer) clearTimeout(schedTimer);
      bus.gain.setTargetAtTime(0, ctx.currentTime, 0.4);
      setTimeout(() => {
        oscs.forEach((o) => {
          try {
            o.stop();
          } catch {
            // already stopped
          }
          o.disconnect();
        });
        sources.forEach((s) => {
          try {
            s.stop();
          } catch {
            // already stopped
          }
          s.disconnect();
        });
        bus.disconnect();
      }, 800);
    };

    this.activeTracks.set(id, { stop });
  }
}
