import { useGame } from '../contexts/GameContext';
import { useEffect, useState } from 'react';

interface GameStatsProps {
  showWinMessage?: boolean;
  isAnimating?: boolean;
}

const GameStats = ({ showWinMessage = true, isAnimating = false }: GameStatsProps) => {
  const { gameWon, targetHero, currentMode } = useGame();
  
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  
  const timeUntilReset = tomorrow.getTime() - now.getTime();
  
  const hours = Math.floor(timeUntilReset / (1000 * 60 * 60));
  const minutes = Math.floor((timeUntilReset % (1000 * 60 * 60)) / (1000 * 60));
  
  const [showDelayedWinCard, setShowDelayedWinCard] = useState(false);
  
  useEffect(() => {
    if (currentMode !== 'classic') {
      setShowDelayedWinCard(true);
      return;
    }
    
    const handleAnimationComplete = (e: CustomEvent) => {
      const { isCorrectGuess } = e.detail;
      if (isCorrectGuess) {
        setShowDelayedWinCard(true);
      }
    };
    
    window.addEventListener('animation-complete', handleAnimationComplete as EventListener);
    
    return () => {
      window.removeEventListener('animation-complete', handleAnimationComplete as EventListener);
    };
  }, [currentMode]);

  return (
    <div className="flex flex-col items-center justify-center mt-4 md:mt-6 p-3 md:p-4 border border-muted rounded-md bg-card/50">
      <div className="text-lg">
      </div>
      
      <div className="text-xs md:text-sm flex items-center justify-center m-0 text-muted-foreground">
        Next hero in: {hours}h {minutes}m
      </div>
      
      {showDelayedWinCard && gameWon && targetHero && (
        <div className="mt-3 md:mt-4 p-3 md:p-4 rounded-md bg-card animate-fade-in">
          <p className="text-base md:text-lg font-semibold mb-2">
            🎉 You won!
          </p>
          <div className="flex items-center justify-center space-x-3 md:space-x-4">
            <img
              src={targetHero.image}
              alt={targetHero.name}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full"
            />
            <div className="text-left">
              <p className="font-bold text-lg md:text-xl">{targetHero.name}</p>
              <p className={`text-${targetHero.role.toLowerCase()}`}>{targetHero.role}</p>
              <p className="text-xs md:text-sm text-muted-foreground">{targetHero.affiliation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameStats;
