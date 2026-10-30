import { useState } from 'react';
import { AuthProvider, useAuth } from '@/lib/auth';
import { AuthScreen } from '@/components/AuthScreen';
import { MenuScreen, LeaderboardScreen } from '@/components/MenuScreen';
import { CustomizeScreen } from '@/components/CustomizeScreen';
import { GameScreen } from '@/components/GameScreen';
import { Zap } from 'lucide-react';

type Screen = 'menu' | 'customize' | 'leaderboard' | 'game';

function Shell() {
  const { session, loading } = useAuth();
  const [screen, setScreen] = useState<Screen>('menu');

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sky-400 to-emerald-300 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg animate-bounce">
            <Zap className="w-9 h-9 text-white" strokeWidth={2.5} />
          </div>
          <p className="text-white font-bold">Loading…</p>
        </div>
      </div>
    );
  }

  if (!session) return <AuthScreen />;

  switch (screen) {
    case 'game':
      return (
        <GameScreen
          onExit={() => setScreen('menu')}
          onLeaderboard={() => setScreen('leaderboard')}
        />
      );
    case 'customize':
      return <CustomizeScreen onBack={() => setScreen('menu')} />;
    case 'leaderboard':
      return <LeaderboardScreen onBack={() => setScreen('menu')} />;
    default:
      return (
        <MenuScreen
          onPlay={() => setScreen('game')}
          onCustomize={() => setScreen('customize')}
          onLeaderboard={() => setScreen('leaderboard')}
        />
      );
  }
}

export default function App() {
  return (
    <AuthProvider>
      <Shell />
    </AuthProvider>
  );
}
