import { useGame } from '../contexts/GameContext';

const GameStats = () => {
  const { remainingGuesses, gameWon, targetHero } = useGame();
  
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  
  const timeUntilReset = tomorrow.getTime() - now.getTime();
  
  const hours = Math.floor(timeUntilReset / (1000 * 60 * 60));
  const minutes = Math.floor((timeUntilReset % (1000 * 60 * 60)) / (1000 * 60));
  
  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-6 p-4 border border-muted rounded-md bg-card/50">
      <div className="text-lg">
        <span className="font-semibold mr-2">Remaining Guesses:</span>
        <span className={remainingGuesses > 2 ? 'text-green-500' : remainingGuesses > 0 ? 'text-yellow-500' : 'text-red-500'}>
          {remainingGuesses}
        </span>
      </div>
      
      <div className="text-sm text-muted-foreground">
        Next hero in: {hours}h {minutes}m
      </div>
      
      {(gameWon || remainingGuesses === 0) && targetHero && (
        <div className="mt-4 p-4 rounded-md bg-card animate-fade-in">
          <p className="text-lg font-semibold mb-2">
            {gameWon ? '🎉 You won!' : '😔 Game Over'}
          </p>
          <div className="flex items-center justify-center space-x-4">
            <img
              src={targetHero.image}
              alt={targetHero.name}
              className="w-16 h-16 rounded-full"
            />
            <div className="text-left">
              <p className="font-bold text-xl">{targetHero.name}</p>
              <p className={`text-${targetHero.role.toLowerCase()}`}>{targetHero.role}</p>
              <p className="text-sm text-muted-foreground">{targetHero.affiliation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameStats;
