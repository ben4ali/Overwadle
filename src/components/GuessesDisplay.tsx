import { useEffect, useRef, useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import { useGame } from '../contexts/GameContext';
import { gsap } from 'gsap';

import tankIcon from '../assets/images/Tank.svg';
import damageIcon from '../assets/images/Damage.svg';
import supportIcon from '../assets/images/Support.svg';

const GuessesDisplay = () => {
  const { guesses, gameWon, targetHero } = useGame();
  const guessesContainerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showWin, setShowWin] = useState(false);

  const columns = [
    { key: 'hero', label: 'Hero' },
    { key: 'role', label: 'Role' },
    { key: 'affiliation', label: 'Affiliation' },
    { key: 'weaponType', label: 'Weapon' },
    { key: 'mobility', label: 'Mobility' },
    { key: 'releaseYear', label: 'Year' },
  ];

  useEffect(() => {
    if (guesses.length && guessesContainerRef.current) {
      setIsAnimating(true);
      setShowWin(false);
      const lastGuessIndex = guesses.length - 1;
      const cells = guessesContainerRef.current.querySelectorAll(`.guess-${lastGuessIndex} .result-cell`);

      gsap.set(cells, { opacity: 0, y: 10 });

      gsap.to(cells, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.7,
        onStart: () => {
          window.dispatchEvent(new CustomEvent('guesses-animating', { detail: true }));
        },
        onComplete: () => {
          setIsAnimating(false);
          window.dispatchEvent(new CustomEvent('guesses-animating', { detail: false }));
          if (gameWon) setShowWin(true);
        },
      });
    } else {
      setIsAnimating(false);
      setShowWin(false);
      window.dispatchEvent(new CustomEvent('guesses-animating', { detail: false }));
    }
  }, [guesses.length, gameWon]);

  // Returns a color class based on the result: green for correct, yellow for partial, red for incorrect
  const getResultClass = (result: boolean | 'partial') => {
    if (result === true) return 'bg-green-600';
    if (result === 'partial') return 'bg-yellow-500';
    return 'bg-red-600';
  };

  return (
    <div className="w-full mt-8">
      <div className="grid grid-cols-6 gap-5 mb-2 items-center justify-between w-full max-w-4xl mx-auto">
        {columns.map((column) => (
          <div key={column.key} className="font-semibold text-center w-full bg-[#1c1c34] text-white h-[3rem] flex items-center justify-center">
            {column.label.toUpperCase()}
          </div>
        ))}
      </div>

      <div className="space-y-2 w-full max-w-4xl mx-auto" ref={guessesContainerRef}>
        {[...guesses].reverse().map((guess, index) => (
          <div key={guesses.length - 1 - index} className={`grid grid-cols-6 gap-5 guess-${guesses.length - 1 - index} w-full`}>
            <div className="result-cell">
              <div className="flex flex-col items-center">
                <img
                  src={guess.hero.image}
                  alt={guess.hero.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className={`result-cell ${getResultClass(!!guess.result.role)} text-white`}>
              <span className={`text-white`}>
                {guess.hero.role === 'Tank' && <img src={tankIcon} alt="Tank" className="inline w-4 h-4 mr-1" style={{'filter':'invert(1)'}} />}
                {guess.hero.role === 'Damage' && <img src={damageIcon} alt="Damage" className="inline w-4 h-4 mr-1" style={{'filter':'invert(1)'}} />}
                {guess.hero.role === 'Support' && <img src={supportIcon} alt="Support" className="inline w-4 h-4 mr-1" style={{'filter':'invert(1)'}} />}
                {guess.hero.role}
              </span>
            </div>
            <div className={`result-cell ${getResultClass(!!guess.result.affiliation)} text-white`}>
              {guess.hero.affiliation}
            </div>
            <div className={`result-cell ${getResultClass(!!guess.result.weaponType)} text-white`}>
              {guess.hero.weaponType}
            </div>
            <div className={`result-cell ${getResultClass(!!guess.result.mobility)} text-white`}>
              {guess.hero.mobility}
            </div>
            <div className={`result-cell ${getResultClass(!!guess.result.releaseYear)} text-white`}>
              <div className="flex items-center justify-center gap-2">
                {guess.hero.releaseYear}
                {!guess.result.releaseYear && targetHero && (
                  <>
                    {guess.hero.releaseYear > targetHero.releaseYear ? (
                      <ArrowDownIcon className="w-5 h-5 text-blue-300" />
                    ) : (
                      <ArrowUpIcon className="w-5 h-5 text-blue-300" />
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showWin && (
        <div className="text-center mt-6">
          <span className="text-3xl font-bold text-green-400 animate-bounce">🎉 You won!</span>
        </div>
      )}

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