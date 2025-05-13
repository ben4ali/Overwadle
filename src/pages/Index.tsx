import { GameProvider, useGame } from '../contexts/GameContext';
import Header from '../components/Header';
import ClassicMode from '../components/modes/ClassicMode';
import QuotesMode from '../components/modes/QuotesMode';
import EmojiMode from '../components/modes/EmojiMode';
import overwatchBG  from '../assets/images/overwatch-bg.jpeg';
import { Helmet } from 'react-helmet-async';

const GameContent = () => {
  const { currentMode } = useGame();
  const renderGameMode = () => {
    switch (currentMode) {
      case 'classic':
        return <ClassicMode />;
      case 'quote':
        return <QuotesMode />;
      case 'emoji':
        return <EmojiMode />;
      default:
        return <ClassicMode />;
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Overwadle - {currentMode.charAt(0).toUpperCase() + currentMode.slice(1)} Mode | Daily Overwatch Hero Guessing Game</title>
        <meta name="description" content={`Play Overwadle in ${currentMode} mode - Can you guess today's Overwatch hero? A daily hero guessing puzzle for Overwatch fans.`} />
        <meta name="keywords" content={`Overwadle, Overwatch game, ${currentMode} mode, hero guessing, daily puzzle`} />
        <link rel="canonical" href={`https://overwadle.online/#/${currentMode === 'classic' ? '' : currentMode}`} />
      </Helmet>
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