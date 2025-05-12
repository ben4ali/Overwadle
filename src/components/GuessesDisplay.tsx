import { useEffect, useRef } from 'react';
import { useGame } from '../contexts/GameContext';
import { gsap } from 'gsap';

const GuessesDisplay = () => {
  const { guesses } = useGame();
  const guessesContainerRef = useRef<HTMLDivElement>(null);

  const columns = [
    { key: 'hero', label: 'Hero' },
    { key: 'role', label: 'Role' },
    { key: 'affiliation', label: 'Affiliation' },
    { key: 'weaponType', label: 'Weapon' },
    { key: 'mobility', label: 'Mobility' },
    { key: 'releaseYear', label: 'Year' },
  ];

  const getResultClass = (result: boolean) => {
    return result
      ? 'result-correct'
      : 'result-incorrect';
  };

  useEffect(() => {
    if (guesses.length && guessesContainerRef.current) {
      const lastGuessIndex = guesses.length - 1;
      const cells = guessesContainerRef.current.querySelectorAll(`.guess-${lastGuessIndex} .result-cell`);

      gsap.set(cells, { opacity: 0, y: 10 });

      gsap.to(cells, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.7,
      });
    }
  }, [guesses.length]);

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <div className="grid grid-cols-6 gap-2 mb-2">
        {columns.map((column) => (
          <div key={column.key} className="font-semibold text-center">
            {column.label}
          </div>
        ))}
      </div>

      <div className="space-y-2" ref={guessesContainerRef}>
        {guesses.map((guess, index) => (
          <div key={index} className={`grid grid-cols-6 gap-2 guess-${index}`}>
            <div className={`result-cell ${getResultClass(guess.result.name)}`}>
              <div className="flex flex-col items-center">
                <img
                  src={guess.hero.image}
                  alt={guess.hero.name}
                  className="w-8 h-8 object-cover rounded-full"
                />
                <span className="text-xs mt-1">{guess.hero.name}</span>
              </div>
            </div>
            <div className={`result-cell ${getResultClass(guess.result.role)}`}>
              <span className={`text-${guess.hero.role.toLowerCase()}`}>
                {guess.hero.role}
              </span>
            </div>
            <div className={`result-cell ${getResultClass(guess.result.affiliation)}`}>
              {guess.hero.affiliation}
            </div>
            <div className={`result-cell ${getResultClass(guess.result.weaponType)}`}>
              {guess.hero.weaponType}
            </div>
            <div className={`result-cell ${getResultClass(guess.result.mobility)}`}>
              {guess.hero.mobility}
            </div>
            <div className={`result-cell ${getResultClass(guess.result.releaseYear)}`}>
              {guess.hero.releaseYear}
            </div>
          </div>
        ))}
      </div>

      {guesses.length === 0 && (
        <div className="text-center p-6 border border-dashed border-muted rounded-md">
          <p className="text-muted-foreground">
            No guesses yet. Start guessing using the input above!
          </p>
        </div>
      )}
    </div>
  );
};

export default GuessesDisplay;