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

interface GameModeState {
  targetHero: Hero | null;
  guesses: Guess[];
  gameWon: boolean;
  lastReset: Date;
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
  const [gameModeStates, setGameModeStates] = useState<Record<GameMode, GameModeState>>({
    classic: { targetHero: null, guesses: [], gameWon: false, lastReset: new Date() },
    ability: { targetHero: null, guesses: [], gameWon: false, lastReset: new Date() },
    quote: { targetHero: null, guesses: [], gameWon: false, lastReset: new Date() },
    emoji: { targetHero: null, guesses: [], gameWon: false, lastReset: new Date() },
    splash: { targetHero: null, guesses: [], gameWon: false, lastReset: new Date() },
  });

  const targetHero = gameModeStates[currentMode].targetHero;
  const guesses = gameModeStates[currentMode].guesses;
  const gameWon = gameModeStates[currentMode].gameWon;
  const lastReset = gameModeStates[currentMode].lastReset;
  
  const setGameWon = (won: boolean) => {
    setGameModeStates(prev => ({
      ...prev,
      [currentMode]: { ...prev[currentMode], gameWon: won }
    }));
  };
  useEffect(() => {
    const savedState = secureRetrieve('overwatchHeroGuessGame');
    const today = new Date().toDateString();
    
    if (savedState && savedState.date === today && savedState.gameModeStates) {
      setGameModeStates(savedState.gameModeStates);
      if (savedState.currentMode) {
        setCurrentMode(savedState.currentMode);
      }
      return;
    }
    
    const initialCurrentMode = currentMode;
    const newGameModeStates: Record<GameMode, GameModeState> = {
      classic: { targetHero: getDailyHero('classic'), guesses: [], gameWon: false, lastReset: new Date() },
      ability: { targetHero: getDailyHero('ability'), guesses: [], gameWon: false, lastReset: new Date() },
      quote: { targetHero: getDailyHero('quote'), guesses: [], gameWon: false, lastReset: new Date() },
      emoji: { targetHero: getDailyHero('emoji'), guesses: [], gameWon: false, lastReset: new Date() },
      splash: { targetHero: getDailyHero('splash'), guesses: [], gameWon: false, lastReset: new Date() }
    };
    
    setGameModeStates(newGameModeStates);
    
    secureStore('overwatchHeroGuessGame', {
      gameModeStates: newGameModeStates,
      date: today,
      currentMode: initialCurrentMode
    });
  }, []);

  useEffect(() => {
    secureStore('overwatchHeroGuessGame', {
      gameModeStates,
      date: new Date().toDateString(),
      currentMode
    });
  }, [gameModeStates, currentMode]);  const addGuess = (hero: Hero) => {
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
    
    // Check if this is a winning guess
    const isCorrectGuess = hero.id === targetHero?.id;
    
    setGameModeStates(prev => ({
      ...prev,
      [currentMode]: { 
        ...prev[currentMode], 
        guesses: newGuesses,
        gameWon: isCorrectGuess ? true : prev[currentMode].gameWon
      }
    }));
  };
  const resetGame = () => {
    const newTargetHero = getDailyHero(currentMode);
    setGameModeStates(prev => ({
      ...prev,
      [currentMode]: {
        targetHero: newTargetHero,
        guesses: [],
        gameWon: false,
        lastReset: new Date()
      }
    }));
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