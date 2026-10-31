import { useEffect, useRef, useState } from 'react';
import { audio } from '@/lib/audio';
import { RunnerGame, type GameResult } from '@/lib/game';
import {
  getCharacterConfig,
  getBestScore,
  saveScore,
} from '@/lib/storage';
import { Home, RotateCw, Trophy } from 'lucide-react';

export function GameScreen({
  onExit,
  onLeaderboard,
}: {
  onExit: () => void;
  onLeaderboard: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<RunnerGame | null>(null);

  const [score, setScore] = useState(0);
  const [result, setResult] = useState<GameResult | null>(null);
  const [savedBest, setSavedBest] = useState<number | null>(null);

  const cfg = getCharacterConfig();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const game = new RunnerGame(canvas, cfg, onGameOver, setScore);
    gameRef.current = game;

    const onResize = () => game.resize();

    window.addEventListener('resize', onResize);

    game.start();

    const onKey = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        audio.resume();
        game.jump();
      }
    };

    window.addEventListener('keydown', onKey);

    const clickHandler = () => {
      audio.resume();
      game.jump();
    };

    canvas.addEventListener('pointerdown', clickHandler);

    // Start background music after the player's first interaction.
    const startAudio = () => {
      audio.resume();
      audio.startMusic();
    };

    canvas.addEventListener('pointerdown', startAudio);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('keydown', onKey);
      canvas.removeEventListener('pointerdown', clickHandler);
      canvas.removeEventListener('pointerdown', startAudio);

      audio.stopMusic();
      game.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onGameOver(r: GameResult) {
    setResult(r);

    saveScore(r.score, r.distance);
    setSavedBest(getBestScore());
  }

  function restart() {
    audio.resume();
    audio.click();
    audio.startMusic();

    setResult(null);
    setScore(0);
    setSavedBest(null);

    gameRef.current?.start();
  }

  return (
    <div className="relative w-full h-screen bg-sky-200 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block touch-none"
      />

      {/* Score HUD */}
      <div className="absolute top-4 right-4 bg-black/40 backdrop-blur text-white font-black text-2xl px-4 py-2 rounded-2xl tabular-nums">
        {score.toLocaleString()}
      </div>

      {/* Exit */}
      <button
        onClick={() => {
          audio.click();
          audio.stopMusic();
          onExit();
        }}
        className="absolute top-4 left-4 bg-black/40 backdrop-blur text-white p-2 rounded-xl hover:bg-black/60 transition"
      >
        <Home className="w-5 h-5" />
      </button>

      {/* Tap hint */}
      {result === null && score === 0 && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/90 font-bold text-sm bg-black/30 px-4 py-2 rounded-full backdrop-blur animate-pulse">
          Tap / Space to jump · double-jump in air
        </div>
      )}

      {/* Game over overlay */}
      {result && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center border border-white">
            <div className="text-6xl mb-2 font-black text-rose-500">
              Oof!
            </div>

            <h2 className="text-2xl font-black text-slate-800 mb-1">
              You crashed
            </h2>

            <p className="text-slate-500 text-sm mb-6">
              That was a funny landing.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <Stat
                label="Score"
                value={result.score.toLocaleString()}
              />

              <Stat
                label="Distance"
                value={`${result.distance}m`}
              />
            </div>

            {savedBest !== null && (
              <p className="text-sm text-slate-500 mb-4">
                Best score:{' '}
                <span className="font-black text-slate-700">
                  {savedBest.toLocaleString()}
                </span>
              </p>
            )}

            <button
              onClick={restart}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black shadow-lg hover:from-amber-600 hover:to-orange-600 transition flex items-center justify-center gap-2 mb-3"
            >
              <RotateCw className="w-5 h-5" />
              Run Again
            </button>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  audio.click();
                  audio.stopMusic();
                  onLeaderboard();
                }}
                className="py-2.5 rounded-2xl bg-emerald-100 text-emerald-700 font-bold hover:bg-emerald-200 transition flex items-center justify-center gap-2"
              >
                <Trophy className="w-4 h-4" />
                Scores
              </button>

              <button
                onClick={() => {
                  audio.click();
                  audio.stopMusic();
                  onExit();
                }}
                className="py-2.5 rounded-2xl bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 transition flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="bg-slate-50 rounded-2xl py-3 border border-slate-100">
      <div className="text-xs font-bold uppercase tracking-wide text-slate-400">
        {label}
      </div>

      <div className="text-xl font-black text-slate-800 tabular-nums">
        {value}
      </div>
    </div>
  );
}
