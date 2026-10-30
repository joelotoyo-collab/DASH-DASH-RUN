import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth';
import { supabase, type ScoreRow } from '@/lib/supabase';
import { audio } from '@/lib/audio';
import { CharacterPreview } from './CharacterPreview';
import { Zap, Play, Scissors, Trophy, LogOut, Volume2, VolumeX } from 'lucide-react';

export function MenuScreen({
  onPlay,
  onCustomize,
  onLeaderboard,
}: {
  onPlay: () => void;
  onCustomize: () => void;
  onLeaderboard: () => void;
}) {
  const { profile, signOut } = useAuth();
  const [best, setBest] = useState(0);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!profile) return;
    supabase
      .from('scores')
      .select('score')
      .eq('user_id', profile.id)
      .order('score', { ascending: false })
      .limit(1)
      .maybeSingle()
      .then(({ data }) => setBest(data?.score ?? 0));
  }, [profile]);

  const cfg = {
    character_type: profile?.character_type ?? 'blob',
    body_color: profile?.body_color ?? '#22d3ee',
    hat: profile?.hat ?? 'none',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-sky-300 to-emerald-300 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Profile bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur rounded-2xl px-4 py-2 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center overflow-hidden">
              <CharacterPreview cfg={cfg} size={48} animate={false} />
            </div>
            <div>
              <div className="font-black text-slate-800 text-sm leading-tight">{profile?.username}</div>
              <div className="text-xs text-slate-500">Best: {best.toLocaleString()}</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => { const m = !muted; setMuted(m); audio.setMuted(m); }}
              className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur shadow-lg flex items-center justify-center text-slate-700 hover:bg-white transition"
            >
              {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
            <button
              onClick={() => { audio.click(); signOut(); }}
              className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur shadow-lg flex items-center justify-center text-slate-700 hover:bg-white transition"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Hero card */}
        <div className="bg-white/85 backdrop-blur rounded-3xl shadow-2xl p-8 border border-white text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg mx-auto mb-4">
            <Zap className="w-12 h-12 text-white" strokeWidth={2.5} />
          </div>
          <h1 className="text-4xl font-black text-slate-800 tracking-tight">Dash Dash Run</h1>
          <p className="text-slate-500 mt-2">An endless runner that gets faster the further you go.</p>

          <div className="my-6 flex justify-center">
            <CharacterPreview cfg={cfg} size={140} />
          </div>

          <button
            onClick={() => { audio.resume(); audio.click(); onPlay(); }}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white text-lg font-black shadow-xl hover:from-amber-600 hover:to-orange-600 transition flex items-center justify-center gap-2"
          >
            <Play className="w-6 h-6 fill-white" /> Play
          </button>

          <div className="grid grid-cols-2 gap-3 mt-3">
            <button
              onClick={() => { audio.click(); onCustomize(); }}
              className="py-3 rounded-2xl bg-sky-100 text-sky-700 font-bold hover:bg-sky-200 transition flex items-center justify-center gap-2"
            >
              <Scissors className="w-5 h-5" /> Customize
            </button>
            <button
              onClick={() => { audio.click(); onLeaderboard(); }}
              className="py-3 rounded-2xl bg-emerald-100 text-emerald-700 font-bold hover:bg-emerald-200 transition flex items-center justify-center gap-2"
            >
              <Trophy className="w-5 h-5" /> Scores
            </button>
          </div>
        </div>

        <p className="text-center text-white/80 text-sm mt-6 font-medium drop-shadow">
          Tap space or click to jump. Double-jump in the air. Grab coins, dodge obstacles.
        </p>
      </div>
    </div>
  );
}

export function LeaderboardScreen({ onBack }: { onBack: () => void }) {
  const { profile } = useAuth();
  const [rows, setRows] = useState<ScoreRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from('scores')
      .select('id, user_id, score, distance, created_at, profiles!inner(username)')
      .order('score', { ascending: false })
      .limit(20)
      .then(({ data }) => {
        setRows((data as unknown as ScoreRow[]) ?? []);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-200 via-sky-200 to-sky-300 p-4 sm:p-8">
      <div className="max-w-xl mx-auto">
        <button
          onClick={() => { audio.click(); onBack(); }}
          className="text-slate-700 hover:text-slate-900 font-bold text-sm mb-6"
        >
          ← Back to menu
        </button>
        <div className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-6 border border-white">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-black text-slate-800">Leaderboard</h1>
          </div>

          {loading ? (
            <p className="text-slate-500 text-center py-8">Loading scores…</p>
          ) : rows.length === 0 ? (
            <p className="text-slate-500 text-center py-8">No scores yet. Be the first!</p>
          ) : (
            <ol className="space-y-2">
              {rows.map((r, i) => {
                const name = r.profiles?.username ?? 'Unknown';
                const mine = profile?.id === r.user_id;
                return (
                  <li
                    key={r.id}
                    className={`flex items-center gap-3 rounded-2xl px-4 py-3 ${mine ? 'bg-amber-50 border-2 border-amber-300' : 'bg-slate-50'}`}
                  >
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm ${i < 3 ? 'bg-amber-400 text-white' : 'bg-slate-200 text-slate-600'}`}>
                      {i + 1}
                    </span>
                    <span className="flex-1 font-bold text-slate-700">{name}{mine ? ' (you)' : ''}</span>
                    <span className="text-slate-500 text-sm">{r.distance}m</span>
                    <span className="font-black text-slate-800 tabular-nums">{r.score.toLocaleString()}</span>
                  </li>
                );
              })}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}
