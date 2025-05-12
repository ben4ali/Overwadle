import { useState, useRef, useEffect } from 'react';
import { heroes } from '../data/heroes';
import type { Hero } from '../data/heroes';
import { useGame } from '../contexts/GameContext';

const HeroInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredHeroes, setFilteredHeroes] = useState<Hero[]>([]);
  const { addGuess, guesses, gameWon } = useGame();
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Listen for animation state from GuessesDisplay
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    const handler = (e: CustomEvent) => setIsAnimating(e.detail);
    window.addEventListener('guesses-animating', handler as EventListener);
    return () => window.removeEventListener('guesses-animating', handler as EventListener);
  }, []);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const guessedIds = new Set(guesses.map(g => g.hero.id));
      const filtered = heroes.filter((hero) =>
        hero.name.toLowerCase().includes(searchTerm.toLowerCase()) && !guessedIds.has(hero.id)
      );
      setFilteredHeroes(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }, [searchTerm, guesses]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleHeroSelect = (hero: Hero) => {
    const alreadyGuessed = guesses.some((guess) => guess.hero.id === hero.id);
    if (alreadyGuessed) {
      alert("You've already guessed this hero!");
      return;
    }
    addGuess(hero);
    setSearchTerm('');
    setShowDropdown(false);
  };

  const isGameActive = !gameWon && !isAnimating;

  return (
    <div className="w-full max-w-md relative">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder={
            isGameActive
              ? "Enter a hero name..."
              : gameWon
              ? "You won!"
              : isAnimating
              ? "Wait for animation..."
              : "No more guesses"
          }
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={() => setShowDropdown(true)}
          className="hero-input w-full"
          disabled={!isGameActive}
        />
      </div>
      
      {showDropdown && (
        <div
          ref={dropdownRef}
          className="absolute mt-2 w-full bg-card border border-muted rounded-md shadow-lg z-10 max-h-60 overflow-auto"
        >
          {filteredHeroes.length > 0 ? (
            filteredHeroes.map((hero) => (
              <div
                key={hero.id}
                className="flex items-center p-2 hover:bg-muted cursor-pointer"
                onClick={() => handleHeroSelect(hero)}
              >
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-10 h-10 object-cover mr-3"
                />
                <div>
                  <div className="font-medium">{hero.name}</div>
                  <div className={`text-xs ${
                    hero.role === 'Tank' ? 'text-tank' :
                    hero.role === 'Damage' ? 'text-damage' :
                    'text-support'
                  }`}>
                    {hero.role}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-2 text-muted-foreground">No heroes found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default HeroInput;