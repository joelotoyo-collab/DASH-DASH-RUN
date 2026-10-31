import { useEffect, useState } from 'react';
import {
  Zap,
  Play,
  Scissors,
  Trophy,
  Volume2,
  VolumeX,
  ArrowLeft,
} from 'lucide-react';

import { audio } from '@/lib/audio';
import { CharacterPreview } from './CharacterPreview';
import { getCharacterConfig, getBestScore, getScores } from '@/lib/storage';
import type { ScoreEntry } from '@/lib/storage';

type MenuScreenProps = {
  onPlay: () => void;
  onCustomize: () => void;
  onLeaderboard: () => void;
};

type LeaderboardScreenProps = {
  onBack: () => void;
};

export function MenuScreen({
  onPlay,
  onCustomize,
  onLeaderboard,
}: MenuScreenProps) {
  const [muted, setMuted] = useState(false);
  const [bestScore, setBestScore] = useState(0);
  const [cfg] = useState(getCharacterConfig);

  useEffect(() => {
    setBestScore(getBestScore());
  }, []);

  function toggleSound() {
    const next = !muted;
    setMuted(next);
    audio.setMuted(next);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center px-5 py-8 overflow-hidden">
      <header className="w-full max-w-3xl flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-cyan-400 text-slate-950 p-2 rounded-xl">
            <Zap size={22} />
          </div>
          <span className="text-xl font-black tracking-wider">
            DASH DASH RUN
          </span>
        </div>

        <button
          onClick={toggleSound}
          className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
          aria-label={muted ? 'Turn sound on' : 'Turn sound off'}
        >
          {muted ? <VolumeX size={21} /> : <Volume2 size={21} />}
        </button>
      </header>

      <section className="flex flex-col items-center text-center mt-12 w-full max-w-xl">
        <div className="mb-5">
          <CharacterPreview cfg={cfg} size={140} animate={false} />
        </div>

        <p className="text-cyan-400 font-bold tracking-[0.3em] text-sm">
          READY, SET, RUN!
        </p>

        <h1 className="text-5xl sm:text-6xl font-black mt-3 tracking-tight">
          DASH <span className="text-cyan-400">DASH</span>
          <br />
          RUN
        </h1>

        <p className="text-slate-400 mt-4">
          Run, dodge obstacles, collect coins and beat your high score.
        </p>

        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-5 w-full max-w-xs">
          <p className="text-slate-400 text-sm font-semibold">
            PERSONAL BEST
          </p>
          <p className="text-4xl font-black text-cyan-400 mt-1">
            {bestScore.toLocaleString()}
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-8 w-full max-w-xs">
          <button
            onClick={onPlay}
            className="w-full flex items-center justify-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-lg py-4 rounded-2xl transition"
          >
            <Play size={22} fill="currentColor" />
            PLAY NOW
          </button>

          <button
            onClick={onCustomize}
            className="w-full flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 rounded-2xl transition"
          >
            <Scissors size={21} />
            CUSTOMIZE CHARACTER
          </button>

          <button
            onClick={onLeaderboard}
            className="w-full flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 rounded-2xl transition"
          >
            <Trophy size={21} />
            HIGH SCORES
          </button>
        </div>
      </section>

      <footer className="mt-auto pt-12 text-slate-600 text-xs tracking-widest">
        DASH DASH RUN
      </footer>
    </main>
  );
}

export function LeaderboardScreen({ onBack }: LeaderboardScreenProps) {
  const [scores, setScores] = useState<ScoreEntry[]>([]);

  useEffect(() => {
    setScores(getScores());
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white px-5 py-8">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-300 hover:text-white font-semibold mb-8"
        >
          <ArrowLeft size={20} />
          BACK TO MENU
        </button>

        <div className="flex items-center gap-3 mb-8">
          <div className="bg-cyan-400 text-slate-950 p-3 rounded-xl">
            <Trophy size={25} />
          </div>

          <div>
            <h1 className="text-3xl font-black">HIGH SCORES</h1>
            <p className="text-slate-400 text-sm">
              Your best runs on this device
            </p>
          </div>
        </div>

        {scores.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
            <Trophy size={40} className="mx-auto text-slate-600 mb-4" />
            <h2 className="text-xl font-bold">No scores yet</h2>
            <p className="text-slate-400 mt-2">
              Play your first game to start your leaderboard!
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {scores.map((entry, index) => (
              <div
                key={entry.id}
                className="flex items-center justify-between gap-4 bg-slate-900 border border-slate-800 rounded-xl p-4"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="text-cyan-400 font-black text-xl w-8">
                    #{index + 1}
                  </span>

                  <div className="min-w-0">
                    <p className="font-bold">Runner</p>
                    <p className="text-xs text-slate-500">
                      {new Date(entry.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <p className="font-black text-cyan-400">
                    {entry.score.toLocaleString()} pts
                  </p>
                  <p className="text-xs text-slate-400">
                    {entry.distance.toLocaleString()} m
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
