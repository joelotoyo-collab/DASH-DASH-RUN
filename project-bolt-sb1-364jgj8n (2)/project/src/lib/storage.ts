import type { CharacterConfig } from './character';

const CHARACTER_KEY = 'dash-dash-run-character';
const SCORES_KEY = 'dash-dash-run-scores';

export type ScoreEntry = {
  id: string;
  score: number;
  distance: number;
  created_at: string;
};

const DEFAULT_CHARACTER: CharacterConfig = {
  character_type: 'blob',
  body_color: '#22d3ee',
  hat: 'none',
};

export function getCharacterConfig(): CharacterConfig {
  try {
    const saved = localStorage.getItem(CHARACTER_KEY);

    if (!saved) return { ...DEFAULT_CHARACTER };

    return {
      ...DEFAULT_CHARACTER,
      ...JSON.parse(saved),
    };
  } catch {
    return { ...DEFAULT_CHARACTER };
  }
}

export function saveCharacterConfig(config: CharacterConfig): void {
  try {
    localStorage.setItem(CHARACTER_KEY, JSON.stringify(config));
  } catch {
    console.warn('Could not save character settings.');
  }
}

export function getScores(): ScoreEntry[] {
  try {
    const saved = localStorage.getItem(SCORES_KEY);

    if (!saved) return [];

    const scores = JSON.parse(saved);

    return Array.isArray(scores) ? scores : [];
  } catch {
    return [];
  }
}

export function saveScore(score: number, distance: number): number {
  const scores = getScores();

  scores.push({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    score: Math.max(0, Math.floor(score)),
    distance: Math.max(0, Math.floor(distance)),
    created_at: new Date().toISOString(),
  });

  scores.sort((a, b) => b.score - a.score);

  const topScores = scores.slice(0, 20);

  try {
    localStorage.setItem(SCORES_KEY, JSON.stringify(topScores));
  } catch {
    console.warn('Could not save game score.');
  }

  return topScores[0]?.score ?? 0;
}

export function getBestScore(): number {
  return getScores()[0]?.score ?? 0;
}
