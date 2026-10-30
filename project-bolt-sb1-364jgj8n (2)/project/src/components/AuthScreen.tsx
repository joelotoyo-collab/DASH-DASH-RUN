import { useState } from 'react';
import { useAuth } from '@/lib/auth';
import { audio } from '@/lib/audio';
import { Zap, Mail, Lock, User } from 'lucide-react';

export function AuthScreen() {
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup'>('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    audio.resume();
    audio.click();
    const res =
      mode === 'signup'
        ? await signUp(email, password, username || 'Runner')
        : await signIn(email, password);
    setBusy(false);
    if (res.error) setError(res.error);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-sky-300 to-emerald-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-8 border border-white">
        <div className="flex flex-col items-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg mb-3">
            <Zap className="w-9 h-9 text-white" strokeWidth={2.5} />
          </div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">Dash Dash Run</h1>
          <p className="text-slate-500 text-sm mt-1">Jump, dodge, and chase the high score</p>
        </div>

        <div className="flex gap-2 mb-6 bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => { setMode('signup'); audio.click(); }}
            className={`flex-1 py-2 rounded-lg font-bold text-sm transition ${mode === 'signup' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}
          >
            Sign Up
          </button>
          <button
            onClick={() => { setMode('signin'); audio.click(); }}
            className={`flex-1 py-2 rounded-lg font-bold text-sm transition ${mode === 'signin' ? 'bg-white shadow text-slate-800' : 'text-slate-500'}`}
          >
            Sign In
          </button>
        </div>

        <form onSubmit={submit} className="space-y-4">
          {mode === 'signup' && (
            <Field icon={<User className="w-4 h-4" />} label="Username">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Your runner name"
                className="w-full bg-transparent outline-none text-slate-800"
              />
            </Field>
          )}
          <Field icon={<Mail className="w-4 h-4" />} label="Email">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-transparent outline-none text-slate-800"
            />
          </Field>
          <Field icon={<Lock className="w-4 h-4" />} label="Password">
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-transparent outline-none text-slate-800"
            />
          </Field>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2 border border-red-100">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={busy}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-lg hover:from-amber-600 hover:to-orange-600 transition disabled:opacity-50"
          >
            {busy ? 'Please wait…' : mode === 'signup' ? 'Create account & Play' : 'Sign in & Play'}
          </button>
        </form>

        <p className="text-xs text-slate-400 text-center mt-5">
          Your progress, scores, and character are saved to your account.
        </p>
      </div>
    </div>
  );
}

function Field({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">{label}</span>
      <div className="mt-1 flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 focus-within:border-amber-400 transition">
        <span className="text-slate-400">{icon}</span>
        {children}
      </div>
    </label>
  );
}
