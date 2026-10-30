import { AudioEngine } from "./AudioEngine";

export type Mood =
  | "menu"
  | "explore"
  | "drive"
  | "sunset"
  | "night"
  | "victory";

export interface Track {
  id: string;
  title: string;
  artist: string;
  mood: Mood;
  config: {
    bpm: number;
    chords: number[][];
    root: number;
    lead: boolean;
    drums: boolean;
    bass: boolean;
    pad: boolean;
  };
}

// Original synthesized tracks — no copyrighted material.
export const TRACKS: Track[] = [
  {
    id: "menu-aurora",
    title: "Aurora",
    artist: "AFTERHOURS Collective",
    mood: "menu",
    config: {
      bpm: 70,
      chords: [[0, 4, 7], [9, 12, 16], [7, 11, 14], [5, 9, 12]],
      root: 57,
      lead: true,
      drums: false,
      bass: true,
      pad: true,
    },
  },
  {
    id: "explore-lofi",
    title: "City Lights",
    artist: "AFTERHOURS Collective",
    mood: "explore",
    config: {
      bpm: 82,
      chords: [[0, 4, 7], [-3, 0, 4], [-5, -1, 2], [-7, -3, 0]],
      root: 60,
      lead: true,
      drums: true,
      bass: true,
      pad: true,
    },
  },
  {
    id: "explore-chill",
    title: "Midnight Stroll",
    artist: "AFTERHOURS Collective",
    mood: "explore",
    config: {
      bpm: 88,
      chords: [[0, 4, 7, 11], [2, 5, 9, 12], [4, 7, 11, 14], [-1, 2, 7, 11]],
      root: 55,
      lead: true,
      drums: true,
      bass: true,
      pad: true,
    },
  },
  {
    id: "drive-neon",
    title: "Neon Pulse",
    artist: "AFTERHOURS Collective",
    mood: "drive",
    config: {
      bpm: 128,
      chords: [[0, 4, 7], [-3, 0, 4], [-5, -1, 2], [-7, -3, 0]],
      root: 50,
      lead: true,
      drums: true,
      bass: true,
      pad: true,
    },
  },
  {
    id: "drive-overdrive",
    title: "Overdrive",
    artist: "AFTERHOURS Collective",
    mood: "drive",
    config: {
      bpm: 140,
      chords: [[0, 3, 7], [5, 10, 14], [3, 7, 10], [-2, 3, 7]],
      root: 52,
      lead: true,
      drums: true,
      bass: true,
      pad: false,
    },
  },
  {
    id: "sunset-amber",
    title: "Amber Sky",
    artist: "AFTERHOURS Collective",
    mood: "sunset",
    config: {
      bpm: 74,
      chords: [[0, 4, 7, 11], [2, 6, 9, 13], [-3, 0, 4, 7], [-5, -1, 2, 7]],
      root: 57,
      lead: true,
      drums: false,
      bass: true,
      pad: true,
    },
  },
  {
    id: "night-synthwave",
    title: "Chrome Dreams",
    artist: "AFTERHOURS Collective",
    mood: "night",
    config: {
      bpm: 110,
      chords: [[0, 3, 7, 10], [5, 8, 12, 15], [3, 7, 10, 14], [-2, 1, 5, 8]],
      root: 48,
      lead: true,
      drums: true,
      bass: true,
      pad: true,
    },
  },
  {
    id: "victory-fanfare",
    title: "Victory",
    artist: "AFTERHOURS Collective",
    mood: "victory",
    config: {
      bpm: 120,
      chords: [[0, 4, 7], [5, 9, 12], [7, 11, 14], [0, 4, 7]],
      root: 60,
      lead: true,
      drums: true,
      bass: true,
      pad: true,
    },
  },
];

export class SoundtrackManager {
  private engine: AudioEngine;
  private current: Track | null = null;
  private listeners: ((track: Track | null) => void)[] = [];

  constructor(engine: AudioEngine) {
    this.engine = engine;
  }

  subscribe(fn: (track: Track | null) => void) {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== fn);
    };
  }

  get currentTrack() {
    return this.current;
  }

  private notify() {
    this.listeners.forEach((l) => l(this.current));
  }

  tracksForMood(mood: Mood): Track[] {
    return TRACKS.filter((t) => t.mood === mood);
  }

  setMood(mood: Mood, opts: { force?: boolean } = {}) {
    if (!this.engine.musicEnabled) return;
    const tracks = this.tracksForMood(mood);
    if (tracks.length === 0) return;
    if (this.current && this.current.mood === mood && !opts.force) return;
    const pick =
      tracks[Math.floor(Math.random() * tracks.length)];
    this.playTrack(pick);
  }

  playTrack(track: Track) {
    if (!this.engine.musicEnabled) return;
    if (this.current && this.current.id === track.id) return;
    // Fade out previous
    if (this.current) this.engine.fadeOutMusic(this.current.id, 1.2);
    this.current = track;
    this.engine.playMusicTrack(track.id, track.config);
    this.notify();
  }

  skip() {
    if (!this.current) return;
    const moodTracks = this.tracksForMood(this.current.mood);
    const others = moodTracks.filter((t) => t.id !== this.current!.id);
    const pool = others.length > 0 ? others : moodTracks;
    const next = pool[Math.floor(Math.random() * pool.length)];
    this.playTrack(next);
  }

  stop() {
    this.engine.stopAllMusic();
    this.current = null;
    this.notify();
  }

  pause() {
    // Duck music instead of fully stopping, to preserve continuity.
    this.engine.setMusicEnabled(false);
  }

  resume() {
    // Re-enable music (volumes handle the rest). Track keeps playing.
    // AudioEngine doesn't actually stop on pause — we just muted the musicGain.
  }
}
