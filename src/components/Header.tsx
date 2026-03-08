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
        className="group fixed bottom-6 right-6 z-50 flex items-center gap-3 pl-2 pr-5 py-2 rounded-2xl bg-white border border-gray-200 text-gray-900 shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-300 hover:bg-[#FFDD00] hover:border-[#FFDD00] hover:shadow-[0_6px_24px_rgba(255,221,0,0.4)] hover:-translate-y-0.5"
      >
        <div className="w-10 h-10 rounded-xl bg-[#FFDD00] group-hover:bg-white flex items-center justify-center transition-colors duration-300 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="fill-black group-hover:fill-[#FFDD00] transition-colors duration-300"
          >
            <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z" />
          </svg>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] font-semibold text-gray-400 group-hover:text-gray-600 uppercase tracking-widest transition-colors duration-200">
            Support me
          </span>
          <span className="text-sm font-extrabold text-gray-900">
            Buy me a coffee
          </span>
        </div>
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
              Talon update 02.2026
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
