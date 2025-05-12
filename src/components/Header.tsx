import { useGame } from '../contexts/GameContext';
import { Gamepad } from 'lucide-react';

const Header = () => {
  const { currentMode, setCurrentMode } = useGame();

  const modes = [
    { id: 'classic', name: 'Classic' },
  ];

  return (
    <header className="w-full py-6 px-4 border-b border-muted">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl font-bold text-ow-orange flex items-center gap-2">
            <Gamepad className="h-8 w-8" />
            Overwatch <span className="text-ow-blue">Hero</span> Guess
          </h1>
          <p className="text-lg text-muted-foreground">
            Can you guess today's Overwatch hero?
          </p>
          
          <div className="flex space-x-2 mt-4">
            {modes.map((mode) => (
              <button
                key={mode.id}
                className={`px-4 py-2 rounded-md transition-colors ${
                  currentMode === mode.id
                    ? 'bg-ow-blue text-white'
                    : 'bg-muted hover:bg-muted/80'
                }`}
                onClick={() => setCurrentMode(mode.id as any)}
              >
                {mode.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;