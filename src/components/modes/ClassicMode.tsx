import { useEffect, useRef } from 'react';
import HeroInput from '../HeroInput';
import GuessesDisplay from '../GuessesDisplay';
import GameStats from '../GameStats';
import { gsap } from 'gsap';

const ClassicMode = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.children;
      
      gsap.fromTo(elements, 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          stagger: 0.7,
          ease: "power2.out" 
        }
      );
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8" ref={containerRef}>
      <div className="flex flex-col items-center space-y-6">
        <div className="w-full max-w-md">
          <HeroInput />
          <GameStats />
        </div>
        <GuessesDisplay />
      </div>
    </div>
  );
};

export default ClassicMode;