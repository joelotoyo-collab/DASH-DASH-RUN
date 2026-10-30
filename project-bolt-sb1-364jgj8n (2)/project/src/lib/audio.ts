// Procedural audio engine: catchy background music + sound effects, no asset files needed.

type Wave = OscillatorType;

class AudioEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private musicGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  private musicTimer: number | null = null;
  private step = 0;
  private musicPlaying = false;
  private tempo = 130;
  muted = false;

  private ensure() {
    if (this.ctx) return;
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new Ctx();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.9;
    this.master.connect(this.ctx.destination);
    this.musicGain = this.ctx.createGain();
    this.musicGain.gain.value = 0.18;
    this.musicGain.connect(this.master);
    this.sfxGain = this.ctx.createGain();
    this.sfxGain.gain.value = 0.5;
    this.sfxGain.connect(this.master);
  }

  resume() {
    this.ensure();
    if (this.ctx && this.ctx.state === 'suspended') void this.ctx.resume();
  }

  setMuted(m: boolean) {
    this.muted = m;
    if (this.master) this.master.gain.value = m ? 0 : 0.9;
  }

  // --- Music ---
  // A bouncy chiptune loop: bass line + arpeggio melody.
  private bassPattern: number[] = [
    130.81, 130.81, 196.0, 130.81,
    146.83, 146.83, 220.0, 146.83,
    164.81, 164.81, 246.94, 164.81,
    196.0, 196.0, 293.66, 196.0,
  ];

  // melody notes (Hz) - a catchy rising/falling phrase
  private melodyPattern: (number | null)[] = [
    523.25, 659.25, 783.99, 659.25,
    587.33, 698.46, 880.0, 698.46,
    659.25, 783.99, 987.77, 783.99,
    587.33, 523.25, 659.25, 523.25,
  ];

  private playNote(freq: number, time: number, dur: number, wave: Wave, gain: GainNode, vol = 1) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const env = this.ctx.createGain();
    osc.type = wave;
    osc.frequency.value = freq;
    env.gain.setValueAtTime(0, time);
    env.gain.linearRampToValueAtTime(vol, time + 0.01);
    env.gain.exponentialRampToValueAtTime(0.001, time + dur);
    osc.connect(env);
    env.connect(gain);
    osc.start(time);
    osc.stop(time + dur + 0.05);
  }

  startMusic() {
    this.ensure();
    if (!this.ctx) return;
    this.resume();
    if (this.musicPlaying) return;
    this.musicPlaying = true;
    this.step = 0;
    const beat = 60 / this.tempo / 2; // eighth notes
    const tick = () => {
      if (!this.ctx || !this.musicPlaying) return;
      const t = this.ctx.currentTime + 0.05;
      const i = this.step % 16;
      // bass
      this.playNote(this.bassPattern[i], t, beat * 0.9, 'triangle', this.musicGain!, 0.9);
      // melody
      const m = this.melodyPattern[i];
      if (m) this.playNote(m, t, beat * 0.8, 'square', this.musicGain!, 0.5);
      // hi-hat-ish click on offbeats
      if (i % 2 === 1) this.playNote(8000, t, 0.03, 'square', this.musicGain!, 0.08);
      this.step++;
      this.musicTimer = window.setTimeout(tick, beat * 1000);
    };
    tick();
  }

  stopMusic() {
    this.musicPlaying = false;
    if (this.musicTimer) {
      clearTimeout(this.musicTimer);
      this.musicTimer = null;
    }
  }

  setTempo(bpm: number) {
    this.tempo = Math.min(220, Math.max(90, bpm));
  }

  // --- SFX ---
  private blip(freq: number, dur: number, wave: Wave, vol = 0.5, slideTo?: number) {
    this.ensure();
    if (!this.ctx || !this.sfxGain) return;
    this.resume();
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const env = this.ctx.createGain();
    osc.type = wave;
    osc.frequency.setValueAtTime(freq, t);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    env.gain.setValueAtTime(0, t);
    env.gain.linearRampToValueAtTime(vol, t + 0.01);
    env.gain.exponentialRampToValueAtTime(0.001, t + dur);
    osc.connect(env);
    env.connect(this.sfxGain);
    osc.start(t);
    osc.stop(t + dur + 0.05);
  }

  jump() {
    this.blip(420, 0.18, 'square', 0.4, 760);
  }

  doubleJump() {
    this.blip(600, 0.2, 'square', 0.4, 1000);
  }

  coin() {
    this.blip(880, 0.08, 'square', 0.35);
    window.setTimeout(() => this.blip(1318.51, 0.12, 'square', 0.35), 80);
  }

  hit() {
    // funny descending "wah wah wah" failure sound
    this.ensure();
    if (!this.ctx || !this.sfxGain) return;
    this.resume();
    const seq = [523.25, 415.3, 311.13];
    seq.forEach((f, i) => {
      window.setTimeout(() => this.blip(f, 0.22, 'sawtooth', 0.45, f * 0.7), i * 180);
    });
    // wobble
    window.setTimeout(() => this.blip(150, 0.4, 'square', 0.3, 80), 540);
  }

  gameOver() {
    // silly "boing" + descending
    this.blip(900, 0.15, 'sine', 0.4, 200);
    window.setTimeout(() => this.blip(300, 0.5, 'sawtooth', 0.4, 90), 160);
  }

  click() {
    this.blip(1200, 0.04, 'square', 0.2);
  }

  levelUp() {
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) =>
      window.setTimeout(() => this.blip(f, 0.12, 'square', 0.35), i * 90)
    );
  }
}

export const audio = new AudioEngine();
