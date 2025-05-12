import { useEffect, useRef, useState } from 'react';
import HeroInput from '../HeroInput';
import GameStats from '../GameStats';
import { useGame } from '../../contexts/GameContext';
import { getDailyEmojisByHeroId } from '../../data/emojis';
import { gsap } from 'gsap';

const revealThresholds = [0, 3, 7, 12];

const EmojiMode = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { targetHero, guesses, gameWon } = useGame();
  const [emojis, setEmojis] = useState<string[]>([]);

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.children;
      gsap.fromTo(elements, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.7, ease: 'power2.out' }
      );
    }
  }, []);

  useEffect(() => {
    if (targetHero) {
      setEmojis(getDailyEmojisByHeroId(targetHero.id));
    }
  }, [targetHero]);

  const guessCount = guesses.length;
  let revealed = 1;
  for (let i = revealThresholds.length - 1; i >= 0; i--) {
    if (guessCount >= revealThresholds[i]) {
      revealed = i + 1;
      break;
    }
  }

  return (
    <div className="container mx-auto px-2 md:px-4 py-4 md:py-8" ref={containerRef}>
      <div className="flex flex-col items-center space-y-4 md:space-y-6">
        <div className="bg-card border border-muted rounded-lg p-4 md:p-6 w-full max-w-2xl text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Which hero do these emojis represent?</h2>
          <div className="flex justify-center items-center space-x-4 text-4xl md:text-6xl">
            {emojis.slice(0, revealed).map((emoji, idx) => (
              <span key={idx}>{emoji}</span>
            ))}
            {Array(4 - revealed).fill(null).map((_, idx) => (
              <span key={idx + revealed} className="opacity-30">?</span>
            ))}
          </div>
        </div>
        <div className="w-full max-w-md">
          <HeroInput disabled={gameWon} />
          <GameStats />
        </div>
        {/* Hero Guesses Display */}
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {[...guesses].reverse().map((guess, index) => (
              <div 
                key={index}
                className={`rounded-lg border shadow-md overflow-hidden transition-all duration-500 transform hover:scale-105 ${guess.result.name ? 'bg-green-600 border-green-400' : 'bg-red-600 border-red-400'}`}
              >
                <div className="relative aspect-square">
                  <img 
                    src={guess.hero.image} 
                    alt={guess.hero.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2 text-center bg-black bg-opacity-50">
                  <div className="font-bold text-sm text-white">{guess.hero.name}</div>
                  <div className="text-xs text-gray-300">{guess.hero.role}</div>
                </div>
              </div>
            ))}
          </div>
          {guesses.length === 0 && !gameWon && (
            <div className="text-center p-6 border border-dashed border-muted rounded-md">
              <p className="text-muted-foreground">
                No guesses yet. Start guessing using the input above!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmojiMode;
