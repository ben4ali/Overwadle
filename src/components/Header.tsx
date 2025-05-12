import { useGame } from '../contexts/GameContext';
import overatchLogo from '../assets/images/overwatch-logo-white.png';
import overwatchTitle from '../assets/images/overwatch-title.png';

const Header = () => {
  const { currentMode, setCurrentMode } = useGame();
  const modes = [
    { id: 'classic', name: 'Classic' },
    { id: 'quote', name: 'Quotes' },
    { id: 'emoji', name: 'Emoji' },
  ];

  return (
    <header className="w-full py-4 md:py-6 px-2 md:px-4 border-b border-muted">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-ow-light-orange flex flex-col md:flex-row items-center gap-1 md:gap-2">
            <img
              src={overatchLogo}
              alt="Overwatch Logo"
              className="h-[2rem] w-[2rem] md:h-[3rem] md:w-[3rem]"
            />
            <img
              src={overwatchTitle}
              alt="Overwatch Title"
              className="h-[3rem] md:h-[5rem]"
            />
          </h1>
          <p className="text-base md:text-lg text-muted-foreground px-4 text-center">
            Can you guess today's Overwatch hero?
          </p>
          
          <div className="flex space-x-2 mt-2 md:mt-4">
            {modes.map((mode) => (
                <button
                key={mode.id}
                className={`px-3 md:px-5 py-1 md:py-2 text-sm md:text-base font-bold uppercase tracking-wide shadow-md transition-colors duration-150
                  ${
                  currentMode === mode.id
                    ? 'bg-ow-orange text-white hover:bg-light-ow-orange'
                    : 'bg-white border-ow-blue text-ow-blue hover:bg-ow-blue hover:text-white'
                  }
                `}
                onClick={() => setCurrentMode(mode.id as 'classic' | 'quote' | 'emoji')}
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