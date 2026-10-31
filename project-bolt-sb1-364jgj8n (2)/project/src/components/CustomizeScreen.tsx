import { useState } from 'react';
import { ArrowLeft, Check, Save } from 'lucide-react';

import { audio } from '@/lib/audio';
import { CharacterPreview } from './CharacterPreview';
import type { CharacterConfig } from '@/lib/character';
import { getCharacterConfig, saveCharacterConfig } from '@/lib/storage';

type CustomizeScreenProps = {
  onBack: () => void;
};

const CHARACTERS = [
  { id: 'blob', name: 'BLOB', description: 'The classic runner' },
  { id: 'robot', name: 'ROBOT', description: 'Built for speed' },
  { id: 'ninja', name: 'NINJA', description: 'Silent and swift' },
];

const COLORS = [
  { id: '#22d3ee', name: 'Cyan' },
  { id: '#a78bfa', name: 'Purple' },
  { id: '#f472b6', name: 'Pink' },
  { id: '#4ade80', name: 'Green' },
  { id: '#facc15', name: 'Yellow' },
  { id: '#fb923c', name: 'Orange' },
  { id: '#f87171', name: 'Red' },
  { id: '#f8fafc', name: 'White' },
];

const HATS = [
  { id: 'none', name: 'NONE' },
  { id: 'cap', name: 'CAP' },
  { id: 'crown', name: 'CROWN' },
  { id: 'space', name: 'SPACE' },
];

export function CustomizeScreen({ onBack }: CustomizeScreenProps) {
  const [cfg, setCfg] = useState<CharacterConfig>(getCharacterConfig);
  const [saved, setSaved] = useState(false);

  function updateConfig(key: keyof CharacterConfig, value: string) {
    setCfg((current) => ({
      ...current,
      [key]: value,
    }));
    setSaved(false);
  }

  function handleSave() {
    saveCharacterConfig(cfg);
    audio.resume();
    setSaved(true);
  }

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

        <h1 className="text-3xl sm:text-4xl font-black">
          CUSTOMIZE <span className="text-cyan-400">RUNNER</span>
        </h1>

        <p className="text-slate-400 mt-2">
          Create a character that feels like yours.
        </p>

        <section className="flex flex-col items-center bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-8">
          <CharacterPreview cfg={cfg} size={150} animate={false} />
          <p className="text-cyan-400 font-black tracking-widest mt-4">
            {cfg.character_type.toUpperCase()} RUNNER
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-black text-lg mb-4">CHOOSE CHARACTER</h2>

          <div className="grid grid-cols-3 gap-3">
            {CHARACTERS.map((character) => (
              <button
                key={character.id}
                onClick={() => updateConfig('character_type', character.id)}
                className={`rounded-xl border p-3 text-center transition ${
                  cfg.character_type === character.id
                    ? 'border-cyan-400 bg-cyan-400/10'
                    : 'border-slate-800 bg-slate-900'
                }`}
              >
                <span className="block font-black">{character.name}</span>
                <span className="block text-xs text-slate-400 mt-1">
                  {character.description}
                </span>
                {cfg.character_type === character.id && (
                  <Check size={16} className="mx-auto mt-2 text-cyan-400" />
                )}
              </button>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-black text-lg mb-4">BODY COLOR</h2>

          <div className="flex flex-wrap gap-4">
            {COLORS.map((color) => (
              <button
                key={color.id}
                onClick={() => updateConfig('body_color', color.id)}
                aria-label={color.name}
                title={color.name}
                className={`w-11 h-11 rounded-full border-4 transition ${
                  cfg.body_color === color.id
                    ? 'border-white scale-110'
                    : 'border-transparent'
                }`}
                style={{ backgroundColor: color.id }}
              />
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-black text-lg mb-4">HEADWEAR</h2>

          <div className="grid grid-cols-4 gap-3">
            {HATS.map((hat) => (
              <button
                key={hat.id}
                onClick={() => updateConfig('hat', hat.id)}
                className={`rounded-xl border p-3 font-bold text-sm transition ${
                  cfg.hat === hat.id
                    ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                    : 'border-slate-800 bg-slate-900 text-slate-300'
                }`}
              >
                {hat.name}
              </button>
            ))}
          </div>
        </section>

        <button
          onClick={handleSave}
          className="w-full flex items-center justify-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-lg py-4 rounded-2xl mt-10 transition"
        >
          {saved ? <Check size={22} /> : <Save size={22} />}
          {saved ? 'LOOK SAVED!' : 'SAVE LOOK'}
        </button>
      </div>
    </main>
  );
}
