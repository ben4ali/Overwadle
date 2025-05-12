import { GameProvider, useGame } from '../contexts/GameContext';
import Header from '../components/Header';
import ClassicMode from '../components/modes/ClassicMode';

const GameContent = () => {
  const { currentMode } = useGame();

  // Render different game modes based on the current mode
  const renderGameMode = () => {
    switch (currentMode) {
      case 'classic':
        return <ClassicMode />;
      default:
        return <ClassicMode />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {renderGameMode()}
      </main>
      <footer className="py-4 text-center text-muted-foreground text-sm">
        <p>Overwatch Hero Guess &copy; {new Date().getFullYear()}</p>
        <p className="text-xs">Not affiliated with Blizzard Entertainment</p>
      </footer>
    </div>
  );
};

const Index = () => {
  return (
    <GameProvider>
      <GameContent />
    </GameProvider>
  );
};

export default Index;