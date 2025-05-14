import { useEffect, useRef, useState, FC } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import { useGame } from '../contexts/GameContext';
import { gsap } from 'gsap';

import tankIcon from '../assets/images/Tank.svg';
import damageIcon from '../assets/images/Damage.svg';
import supportIcon from '../assets/images/Support.svg';

interface GuessesDisplayProps {
  justArrived?: boolean;
}

const GuessesDisplay : FC<GuessesDisplayProps> = ({
  justArrived = true,
}) => {
  const { guesses, gameWon, targetHero, setGameWon } = useGame();
  const guessesContainerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showWinMessage, setShowWinMessage] = useState(false);
  const prevGuessesLengthRef = useRef(-1);

  const lastGuessesLength = useRef(guesses.length);
  const setGameWonRef = useRef(setGameWon);

  useEffect(() => {
    setGameWonRef.current = setGameWon;
  }, [setGameWon]);

  const columns = [
    { key: 'hero', label: 'Hero' },
    { key: 'role', label: 'Role' },
    { key: 'affiliation', label: 'Affiliation' },
    { key: 'weaponType', label: 'Weapon' },
    { key: 'mobility', label: 'Mobility' },
    { key: 'releaseYear', label: 'Year' },
  ];

  useEffect(() => {
    prevGuessesLengthRef.current = guesses.length;
    if (gameWon) {
      setShowWinMessage(true);
    }
  }, [gameWon, guesses.length]);

  useEffect(() => {
    if (justArrived) {
      if (gameWon) {
        setShowWinMessage(true);
      }
      return;
    }

    if (prevGuessesLengthRef.current === -1) {
      prevGuessesLengthRef.current = guesses.length;
      return;
    }

    const currentGuessesLength = guesses.length;
    if (currentGuessesLength <= lastGuessesLength.current) {
      lastGuessesLength.current = currentGuessesLength;
      return;
    }
    
    lastGuessesLength.current = currentGuessesLength;
    prevGuessesLengthRef.current = currentGuessesLength;
   
    const lastGuess = guesses[currentGuessesLength - 1];
    const isCorrectGuess = lastGuess?.result.name === true;
    
    setIsAnimating(true);
    setShowWinMessage(false);
    window.dispatchEvent(new CustomEvent('guesses-animating', { detail: true }));
    
    const newestGuessRow = guessesContainerRef.current?.querySelector('.guess-0');
    if (!newestGuessRow) {
      console.error('Animation target not found');
      setIsAnimating(false);
      return;
    }
    
    const cells = newestGuessRow.querySelectorAll('.result-cell');
    gsap.set(cells, { opacity: 0, y: 10 });
    
    gsap.to(cells, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
      stagger: {
        each: 0.5,
        from: "start",
        ease: "none"
      },
      onComplete: () => {
        setIsAnimating(false);
        window.dispatchEvent(new CustomEvent('guesses-animating', { detail: false }));
        window.dispatchEvent(new CustomEvent('animation-complete', { detail: { isCorrectGuess } }));
        
        if (isCorrectGuess) {
          setGameWonRef.current(true);
          setShowWinMessage(true);
        } else {
          setShowWinMessage(false);
        }
      },
    });
  }, [guesses.length]);

  const getResultClass = (result: boolean | 'partial') => {
    if (result === true) return 'bg-green-600';
    if (result === 'partial') return 'bg-yellow-500';
    return 'bg-red-600';
  };

  return (
    <div className="w-full overflow-x-auto pb-4">
      {showWinMessage && !isAnimating && (
        <div className="text-center my-6 animate-fade-in">
          <span className="text-3xl font-bold text-green-400 animate-bounce mb-3">🎉 You won!</span>
        </div>
      )}
      
      <div className="grid grid-cols-6 gap-1 md:gap-5 mb-2 items-center justify-between w-full max-w-4xl mx-auto min-w-[600px]">
        {columns.map((column) => (
          <div 
            key={column.key} 
            className="font-semibold text-center w-full bg-[#1c1c34] text-white h-[3rem] flex items-center justify-center text-xs md:text-base px-1"
          >
            {column.label.toUpperCase()}
          </div>
        ))}
      </div>

      <div className="space-y-2 w-full max-w-4xl mx-auto min-w-[600px]" ref={guessesContainerRef}>
        {[...guesses].reverse().map((guess, index) => (
          <div 
            key={guesses.length - 1 - index} 
            className={`grid grid-cols-6 gap-1 md:gap-5 guess-${index} w-full`}
          >
            <div className="result-cell md:h-[8.2rem] h-[6rem]">
              <div className="flex flex-col items-center">
                <img
                  src={guess.hero.image}
                  alt={guess.hero.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className={`result-cell h-[6rem] md:h-[8.2rem] ${getResultClass(!!guess.result.role)} text-white`}>
              <span className={`text-white text-xs md:text-base`}>
                {guess.hero.role === 'Tank' && <img src={tankIcon} alt="Tank" className="inline w-3 h-3 md:w-4 md:h-4 mr-1" style={{'filter':'invert(1)'}} />}
                {guess.hero.role === 'Damage' && <img src={damageIcon} alt="Damage" className="inline w-3 h-3 md:w-4 md:h-4 mr-1" style={{'filter':'invert(1)'}} />}
                {guess.hero.role === 'Support' && <img src={supportIcon} alt="Support" className="inline w-3 h-3 md:w-4 md:h-4 mr-1" style={{'filter':'invert(1)'}} />}
                {guess.hero.role}
              </span>
            </div>
            <div className={`result-cell h-[6rem] md:h-[8.2rem] ${getResultClass(!!guess.result.affiliation)} text-white text-xs md:text-base px-1`}>
              {guess.hero.affiliation}
            </div>
            <div className={`result-cell h-[6rem] md:h-[8.2rem] ${getResultClass(!!guess.result.weaponType)} text-white text-xs md:text-base`}>
              {guess.hero.weaponType}
            </div>
            <div className={`result-cell h-[6rem] md:h-[8.2rem] ${getResultClass(!!guess.result.mobility)} text-white text-xs md:text-base`}>
              {guess.hero.mobility}
            </div>
            <div className={`result-cell h-[6rem] md:h-[8.2rem] ${getResultClass(!!guess.result.releaseYear)} text-white text-xs md:text-base`}>
              <div className="flex items-center justify-center gap-1 md:gap-2">
                {guess.hero.releaseYear}
                {!guess.result.releaseYear && targetHero && (
                  <>
                    {guess.hero.releaseYear > targetHero.releaseYear ? (
                      <ArrowDownIcon className="w-3 h-3 md:w-5 md:h-5 text-blue-300" />
                    ) : (
                      <ArrowUpIcon className="w-3 h-3 md:w-5 md:h-5 text-blue-300" />
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {guesses.length === 0 && (
        <div className="text-center p-6 border border-dashed border-muted rounded-md w-full max-w-4xl mx-auto">
          <p className="text-muted-foreground">
            No guesses yet. Start guessing using the input above!
          </p>
        </div>
      )}
    </div>
  );
};

export default GuessesDisplay;
