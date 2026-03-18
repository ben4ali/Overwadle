import overatchLogo from '../assets/images/overwatch-logo-white.png';
import overwatchTitle from '../assets/images/overwatch-title.png';
import { useGame } from '../contexts/GameContext';

const Header = () => {
  const { currentMode, setCurrentMode } = useGame();
  const modes = [
    { id: 'classic', name: 'Classic' },
    { id: 'quote', name: 'Quotes' },
    { id: 'emoji', name: 'Emoji' },
    { id: 'country', name: 'Country', isNew: true },
  ];

  return (
    <header className="w-full py-4 md:py-6 px-2 md:px-4 border-b border-muted relative">
      <a
        href="https://buymeacoffee.com/ben4ali"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-3 right-3 z-50 px-3 py-1.5 rounded-md underline text-neutral-400 shadow-sm  transition-all duration-200 hover:text-neutral-300"
      >
        <span className="text-[10px] font-bold  uppercase tracking-wider">
          Buy me a coffee
        </span>
      </a>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
          <div className="relative inline-flex pb-5">
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
            <span className="absolute bottom-0 right-[0.5rem]  bg-red-600 text-white text-[12px] md:text-[10px] font-black uppercase tracking-widest px-2.5 py-1 shadow-[2px_2px_0px_rgba(0,0,0,0.3)] pointer-events-none">
              Talon update 2026
            </span>
          </div>
          <p className="text-base md:text-lg text-muted-foreground px-4 text-center">
            Can you guess today's Overwatch hero?
          </p>

          <div className="flex space-x-2 mt-2 md:mt-4">
            {modes.map(mode => (
              <div key={mode.id} className="relative">
                <button
                  className={`px-3 md:px-5 py-1 md:py-2 text-sm md:text-base font-bold uppercase tracking-wide shadow-md transition-colors duration-150
                    ${
                      currentMode === mode.id
                        ? 'bg-ow-orange text-white hover:bg-light-ow-orange'
                        : 'bg-white border-ow-blue text-ow-blue hover:bg-ow-blue hover:text-white'
                    }
                  `}
                  onClick={() =>
                    setCurrentMode(
                      mode.id as 'classic' | 'quote' | 'emoji' | 'country',
                    )
                  }
                >
                  {mode.name}
                </button>
                {mode.isNew && (
                  <span className="absolute -top-2.5 -right-5 rotate-[18deg] bg-orange-600 text-white text-[15px] font-black uppercase tracking-wider px-1.5 py-0.5 shadow-[1px_1px_0px_rgba(0,0,0,0.4)] pointer-events-none leading-none">
                    new
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
