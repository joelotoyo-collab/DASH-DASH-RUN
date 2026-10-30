import { useState } from 'react';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/lib/supabase';
import { audio } from '@/lib/audio';
import { CharacterPreview } from './CharacterPreview';
import type { CharacterConfig } from '@/lib/character';
import { Check, ArrowLeft } from 'lucide-react';

const CHARACTERS = [
  { id: 'blob', name: 'Blob', desc: 'Squishy and bouncy' },
  { id: 'robot', name: 'Robo', desc: 'Built to dash' },
  { id: 'ninja', name: 'Ninja', desc: 'Quick and stealthy' },
];

const COLORS = ['#22d3ee', '#f472b6', '#34d399', '#fbbf24', '#a78bfa', '#fb7185', '#60a5fa', '#f97316'];
const HATS = [
  { id: 'none', name: 'None' },
  { id: 'cap', name: 'Cap' },
  { id: 'crown', name: 'Crown' },
  { id: 'space', name: 'Space' },
];

export function CustomizeScreen({ onBack }: { onBack: () => void }) {
  const { profile, refreshProfile } = useAuth();
  const [cfg, setCfg] = useState<CharacterConfig>({
    character_type: profile?.character_type ?? 'blob',
    body_color: profile?.body_color ?? '#22d3ee',
    hat: profile?.hat ?? 'none',
  });
  const [username, setUsername] = useState(profile?.username ?? 'Runner');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  async function save() {
    setSaving(true);
    audio.click();
    await supabase.from('profiles').update({
      username,
      character_type: cfg.character_type,
      body_color: cfg.body_color,
      hat: cfg.hat,
      updated_at: new Date().toISOString(),
    }).eq('id', profile!.id);
    await refreshProfile();
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 via-sky-100 to-emerald-100 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => { audio.click(); onBack(); }}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-800 font-bold text-sm mb-6 transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to menu
        </button>

        <h1 className="text-3xl font-black text-slate-800 mb-1">Customize Your Runner</h1>
        <p className="text-slate-500 mb-8">Pick a body, color, and hat. Your choice shows up in-game and on the leaderboard.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Preview */}
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center border border-white">
            <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-sky-100 to-emerald-100 flex items-center justify-center mb-4">
              <CharacterPreview cfg={cfg} size={180} />
            </div>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              maxLength={20}
              className="text-center text-xl font-bold text-slate-800 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 w-full focus:border-amber-400 outline-none"
            />
            <button
              onClick={save}
              disabled={saving}
              className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-lg hover:from-amber-600 hover:to-orange-600 transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {saved ? <><Check className="w-5 h-5" /> Saved!</> : saving ? 'Saving…' : 'Save Look'}
            </button>
          </div>

          {/* Options */}
          <div className="space-y-6">
            <Section title="Character">
              <div className="grid grid-cols-3 gap-3">
                {CHARACTERS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => { audio.click(); setCfg({ ...cfg, character_type: c.id }); }}
                    className={`p-3 rounded-2xl border-2 text-center transition ${cfg.character_type === c.id ? 'border-amber-400 bg-amber-50' : 'border-slate-200 bg-white hover:border-slate-300'}`}
                  >
                    <div className="flex justify-center mb-1">
                      <CharacterPreview cfg={{ ...cfg, character_type: c.id }} size={56} animate={false} />
                    </div>
                    <div className="font-bold text-sm text-slate-700">{c.name}</div>
                  </button>
                ))}
              </div>
            </Section>

            <Section title="Color">
              <div className="flex flex-wrap gap-3">
                {COLORS.map((color) => (
                  <button
                    key={color}
                    onClick={() => { audio.click(); setCfg({ ...cfg, body_color: color }); }}
                    className={`w-10 h-10 rounded-full border-4 transition ${cfg.body_color === color ? 'border-slate-700 scale-110' : 'border-white shadow'}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </Section>

            <Section title="Hat">
              <div className="grid grid-cols-4 gap-3">
                {HATS.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => { audio.click(); setCfg({ ...cfg, hat: h.id }); }}
                    className={`p-2 rounded-2xl border-2 text-center transition ${cfg.hat === h.id ? 'border-amber-400 bg-amber-50' : 'border-slate-200 bg-white hover:border-slate-300'}`}
                  >
                    <div className="flex justify-center mb-1">
                      <CharacterPreview cfg={{ ...cfg, hat: h.id }} size={48} animate={false} />
                    </div>
                    <div className="text-xs font-bold text-slate-600">{h.name}</div>
                  </button>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-5 border border-white">
      <h3 className="font-black text-slate-700 mb-3 text-sm uppercase tracking-wide">{title}</h3>
      {children}
    </div>
  );
}
