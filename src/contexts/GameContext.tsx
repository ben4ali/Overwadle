import { createContext, useState, useContext, useEffect } from 'react';
import type { Hero } from '../data/heroes';
import { getDailyHero } from '../data/heroes';
import { secureStore, secureRetrieve } from '../lib/encryption';

export type GameMode = 'classic' | 'ability' | 'quote' | 'emoji' | 'splash';

export interface Guess {
  hero: Hero;
  result: {
    name: boolean;
    role: boolean;
    affiliation: boolean;
    weaponType: boolean;
    mobility: boolean;
    releaseYear: boolean;
  };
}

interface GameContextType {
  currentMode: GameMode;
  setCurrentMode: (mode: GameMode) => void;
  targetHero: Hero | null;
  guesses: Guess[];
  addGuess: (hero: Hero) => void;
  resetGame: () => void;
  gameWon: boolean;
  setGameWon: (won: boolean) => void;
  remainingGuesses: number;
  lastReset: Date;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentMode, setCurrentMode] = useState<GameMode>('classic');
  const [targetHero, setTargetHero] = useState<Hero | null>(null);
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [gameWon, setGameWon] = useState(false);
  const [lastReset, setLastReset] = useState(new Date());

  useEffect(() => {
    const savedState = secureRetrieve('overwatchHeroGuessGame');
    const today = new Date().toDateString();
    
    if (savedState) {
      if (savedState.date === today) {
        setTargetHero(savedState.targetHero);
        setGuesses(savedState.guesses || []);
        setGameWon(savedState.gameWon || false);
        setLastReset(new Date(savedState.lastReset || new Date()));
        setCurrentMode(savedState.currentMode || 'classic');
        return;
      }
    }
    
    const newTargetHero = getDailyHero();
    setTargetHero(newTargetHero);
    setGuesses([]);
    setGameWon(false);
    setLastReset(new Date());
    
    secureStore('overwatchHeroGuessGame', {
      targetHero: newTargetHero,
      guesses: [],
      gameWon: false,
      lastReset: new Date(),
      date: today,
      currentMode: currentMode
    });
  }, [currentMode]);
  
  useEffect(() => {
    if (targetHero) {
      secureStore('overwatchHeroGuessGame', {
        targetHero,
        guesses,
        gameWon,
        lastReset,
        date: new Date().toDateString(),
        currentMode
      });
    }
  }, [targetHero, guesses, gameWon, lastReset, currentMode]);
  const addGuess = (hero: Hero) => {
    if (gameWon) return;
    
    const result = {
      name: hero.id === targetHero?.id,
      role: hero.role === targetHero?.role,
      affiliation: hero.affiliation === targetHero?.affiliation,
      weaponType: hero.weaponType === targetHero?.weaponType,
      mobility: hero.mobility === targetHero?.mobility,
      releaseYear: hero.releaseYear === targetHero?.releaseYear,
    };
    
    const newGuess: Guess = { hero, result };
    const newGuesses = [...guesses, newGuess];
    setGuesses(newGuesses);
  };

  const resetGame = () => {
    const newTargetHero = getDailyHero();
    setTargetHero(newTargetHero);
    setGuesses([]);
    setGameWon(false);
    setLastReset(new Date());
  };
  return (
    <GameContext.Provider value={{
      currentMode,
      setCurrentMode,
      targetHero,
      guesses,
      addGuess,
      resetGame,
      gameWon,
      setGameWon,
      remainingGuesses: 0,
      lastReset
    }}>
      {children}
    </GameContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};