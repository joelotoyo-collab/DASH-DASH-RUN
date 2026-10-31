import { useState } from 'react';
import { MenuScreen, LeaderboardScreen } from '@/components/MenuScreen';
import { CustomizeScreen } from '@/components/CustomizeScreen';
import { GameScreen } from '@/components/GameScreen';

type Screen = 'menu' | 'customize' | 'leaderboard' | 'game';

export default function App() {
  const [screen, setScreen] = useState<Screen>('menu');

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
