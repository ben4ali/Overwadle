import { createContext, useState, useContext, useEffect } from 'react';
import type { Hero } from '../data/heroes';
import { getDailyHero } from '../data/heroes';

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
  const maxGuesses = 6;

  useEffect(() => {
    const savedState = localStorage.getItem('overwatchHeroGuessGame');
    const today = new Date().toDateString();
    
    if (savedState) {
      const state = JSON.parse(savedState);
      
      if (state.date === today) {
        setTargetHero(state.targetHero);
        setGuesses(state.guesses || []);
        setGameWon(state.gameWon || false);
        setLastReset(new Date(state.lastReset || new Date()));
        setCurrentMode(state.currentMode || 'classic');
        return;
      }
    }
    
    const newTargetHero = getDailyHero();
    setTargetHero(newTargetHero);
    setGuesses([]);
    setGameWon(false);
    setLastReset(new Date());
    
    saveGameState({
      targetHero: newTargetHero,
      guesses: [],
      gameWon: false,
      lastReset: new Date(),
      date: today,
      currentMode: currentMode
    });
  }, []);

  useEffect(() => {
    if (targetHero) {
      saveGameState({
        targetHero,
        guesses,
        gameWon,
        lastReset,
        date: new Date().toDateString(),
        currentMode
      });
    }
  }, [targetHero, guesses, gameWon, lastReset, currentMode]);

  const saveGameState = (state: unknown) => {
    localStorage.setItem('overwatchHeroGuessGame', JSON.stringify(state));
  };

  const addGuess = (hero: Hero) => {
    if (gameWon || guesses.length >= maxGuesses) return;
    
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
    
    if (result.name) {
      setGameWon(true);
    }
  };

  const resetGame = () => {
    const newTargetHero = getDailyHero();
    setTargetHero(newTargetHero);
    setGuesses([]);
    setGameWon(false);
    setLastReset(new Date());
  };

  const remainingGuesses = maxGuesses - guesses.length;

  return (
    <GameContext.Provider value={{
      currentMode,
      setCurrentMode,
      targetHero,
      guesses,
      addGuess,
      resetGame,
      gameWon,
      remainingGuesses,
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