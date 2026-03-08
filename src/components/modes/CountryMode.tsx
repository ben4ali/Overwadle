import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { getCountryByHeroId, knownCountries } from '../../data/countries';
import type { Hero } from '../../data/heroes';
import { heroes } from '../../data/heroes';

const TOTAL_ROUNDS = 5;

interface Option {
  country: string;
  code: string;
}

interface Round {
  hero: Hero;
  correctCountry: string;
  correctCode: string;
  options: Option[];
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateRounds(): Round[] {
  const eligible = heroes.filter(h => {
    const c = getCountryByHeroId(h.id);
    return c && c.country && c.code;
  });
  const picked = shuffle(eligible).slice(0, TOTAL_ROUNDS);

  return picked.map(hero => {
    const { country, code } = getCountryByHeroId(hero.id)!;
    const distractors = shuffle(
      knownCountries.filter(c => c.country !== country),
    ).slice(0, 3);
    const options = shuffle([
      { country: country!, code: code! },
      ...distractors,
    ]);
    return { hero, correctCountry: country!, correctCode: code!, options };
  });
}

export default function CountryMode() {
  const [rounds, setRounds] = useState<Round[]>(generateRounds);
  const [currentRound, setCurrentRound] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.fromTo(
      containerRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out' },
    );
  }, []);

  // Animate card on round change
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' },
      );
    }
  }, [currentRound]);

  if (rounds.length === 0) return null;

  const round = rounds[currentRound];
  const isAnswered = selected !== null;

  function handleSelect(country: string) {
    if (isAnswered) return;
    setSelected(country);
    if (country === round.correctCountry) setScore(s => s + 1);
  }

  function handleNext() {
    if (currentRound + 1 >= TOTAL_ROUNDS) {
      setDone(true);
    } else {
      setCurrentRound(r => r + 1);
      setSelected(null);
    }
  }

  function handleRestart() {
    setRounds(generateRounds());
    setCurrentRound(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  }

  if (done) {
    const pct = Math.round((score / TOTAL_ROUNDS) * 100);
    const medal = score === TOTAL_ROUNDS ? '🏆' : score >= 3 ? '🥈' : '😅';
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col items-center gap-6 max-w-sm w-full text-center shadow-xl">
          <span className="text-6xl">{medal}</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            {score === TOTAL_ROUNDS
              ? 'Perfect score!'
              : score >= 3
                ? 'Nice work!'
                : 'Better luck next time!'}
          </h2>
          <p className="text-muted-foreground text-base">
            You got{' '}
            <span className="text-ow-light-orange font-extrabold text-xl">
              {score}
            </span>{' '}
            out of <span className="text-white font-bold">{TOTAL_ROUNDS}</span>{' '}
            correct
            <span className="block text-sm mt-1">({pct}%)</span>
          </p>
          {/* Score bar */}
          <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-ow-light-orange transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>
          <button
            onClick={handleRestart}
            className="mt-2 px-8 py-3 rounded-xl bg-ow-orange text-white font-extrabold uppercase tracking-wide shadow-md hover:bg-ow-light-orange transition-colors duration-150"
          >
            Play again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center gap-6 px-4 py-8 max-w-lg mx-auto"
    >
      {/* Progress */}
      <div className="w-full flex items-center gap-3">
        <div className="flex gap-1.5 flex-1">
          {Array.from({ length: TOTAL_ROUNDS }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                i < currentRound
                  ? 'bg-ow-light-orange'
                  : i === currentRound
                    ? 'bg-white/60'
                    : 'bg-white/15'
              }`}
            />
          ))}
        </div>
        <span className="text-sm font-bold text-muted-foreground whitespace-nowrap">
          {currentRound + 1} / {TOTAL_ROUNDS}
        </span>
      </div>

      {/* Hero card */}
      <div
        ref={cardRef}
        className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-3 shadow-lg"
      >
        <img
          src={round.hero.image}
          alt={round.hero.name}
          className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-xl"
        />
        <div className="text-center">
          <p className="text-xl md:text-2xl font-extrabold text-white">
            {round.hero.name}
          </p>
          <p className="text-sm text-muted-foreground mt-0.5">
            {round.hero.role}
          </p>
        </div>
        <p className="text-sm font-semibold text-ow-light-orange/80 mt-1">
          Where is this hero from?
        </p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3 w-full">
        {round.options.map(opt => {
          const isCorrect = opt.country === round.correctCountry;
          const isSelected = opt.country === selected;

          let style =
            'border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/25 text-white';
          if (isAnswered) {
            if (isCorrect)
              style =
                'border-2 border-green-400 bg-green-500/20 text-green-300';
            else if (isSelected)
              style = 'border-2 border-red-400 bg-red-500/20 text-red-300';
            else style = 'border border-white/5 bg-white/3 text-white/30';
          }

          return (
            <button
              key={opt.country}
              onClick={() => handleSelect(opt.country)}
              disabled={isAnswered}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all duration-150 ${style} ${
                !isAnswered ? 'cursor-pointer' : 'cursor-default'
              }`}
            >
              <img
                src={`https://flagcdn.com/w40/${opt.code}.png`}
                alt={opt.country}
                className="w-8 h-auto rounded-sm shadow-sm flex-shrink-0"
              />
              <span className="text-left leading-tight">{opt.country}</span>
              {isAnswered && isCorrect && (
                <span className="ml-auto text-green-400 text-base">✓</span>
              )}
              {isAnswered && isSelected && !isCorrect && (
                <span className="ml-auto text-red-400 text-base">✗</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Next button */}
      {isAnswered && (
        <button
          onClick={handleNext}
          className="w-full py-3 rounded-xl bg-ow-orange text-white font-extrabold uppercase tracking-wide shadow-md hover:bg-ow-light-orange transition-colors duration-150"
        >
          {currentRound + 1 >= TOTAL_ROUNDS ? 'See results' : 'Next round →'}
        </button>
      )}
    </div>
  );
}
