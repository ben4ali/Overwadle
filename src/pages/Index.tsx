import { GameProvider, useGame } from '../contexts/GameContext';
import Header from '../components/Header';
import ClassicMode from '../components/modes/ClassicMode';
import QuotesMode from '../components/modes/QuotesMode';
import overwatchBG  from '../assets/images/overwatch-bg.jpeg'

const GameContent = () => {
  const { currentMode } = useGame();
  const renderGameMode = () => {
    switch (currentMode) {
      case 'classic':
        return <ClassicMode />;
      case 'quote':
        return <QuotesMode />;
      default:
        return <ClassicMode />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 z-2 relative">
        {renderGameMode()}
      </main>
      <img
        src={overwatchBG}
        alt="Overwatch Background"
        className="fixed inset-0 object-cover w-full h-full z-[-5] opacity-30"
        style={{ filter: 'blur(5px)' }}
      />
      <footer className="py-2 md:py-4 text-center text-muted-foreground text-xs md:text-sm">
        <p>Overwatch Hero Guess &copy; {new Date().getFullYear()}</p>
        <p className="text-[10px] md:text-xs">This game is fan-made and not affiliated with Blizzard Entertainment</p>
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