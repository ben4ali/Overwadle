export interface HeroCountry {
  heroId: string;
  country: string | null; // null = unknown / no nationality
  code: string | null; // ISO 3166-1 alpha-2 for flag images
}

export const heroCountries: HeroCountry[] = [
  { heroId: 'ana', country: 'Egypt', code: 'eg' },
  { heroId: 'ashe', country: 'USA', code: 'us' },
  { heroId: 'baptiste', country: 'Haiti', code: 'ht' },
  { heroId: 'bastion', country: null, code: null },
  { heroId: 'brigitte', country: 'Sweden', code: 'se' },
  { heroId: 'cassidy', country: 'USA', code: 'us' },
  { heroId: 'dva', country: 'South Korea', code: 'kr' },
  { heroId: 'doomfist', country: 'Nigeria', code: 'ng' },
  { heroId: 'echo', country: null, code: null },
  { heroId: 'freja', country: 'Denmark', code: 'dk' },
  { heroId: 'genji', country: 'Japan', code: 'jp' },
  { heroId: 'hanzo', country: 'Japan', code: 'jp' },
  { heroId: 'hazard', country: 'UK', code: 'gb' },
  { heroId: 'illari', country: 'Peru', code: 'pe' },
  { heroId: 'junker-queen', country: 'Australia', code: 'au' },
  { heroId: 'junkrat', country: 'Australia', code: 'au' },
  { heroId: 'juno', country: null, code: null },
  { heroId: 'kiriko', country: 'Japan', code: 'jp' },
  { heroId: 'lifeweaver', country: 'Thailand', code: 'th' },
  { heroId: 'lucio', country: 'Brazil', code: 'br' },
  { heroId: 'mauga', country: 'Samoa', code: 'ws' },
  { heroId: 'mei', country: 'China', code: 'cn' },
  { heroId: 'mercy', country: 'Switzerland', code: 'ch' },
  { heroId: 'moira', country: 'Ireland', code: 'ie' },
  { heroId: 'orisa', country: 'Nigeria', code: 'ng' },
  { heroId: 'pharah', country: 'Egypt', code: 'eg' },
  { heroId: 'ramattra', country: null, code: null },
  { heroId: 'reaper', country: 'USA', code: 'us' },
  { heroId: 'reinhardt', country: 'Germany', code: 'de' },
  { heroId: 'roadhog', country: 'Australia', code: 'au' },
  { heroId: 'sigma', country: 'Netherlands', code: 'nl' },
  { heroId: 'sojourn', country: 'Canada', code: 'ca' },
  { heroId: 'soldier-76', country: 'USA', code: 'us' },
  { heroId: 'sombra', country: 'Mexico', code: 'mx' },
  { heroId: 'symmetra', country: 'India', code: 'in' },
  { heroId: 'torbjorn', country: 'Sweden', code: 'se' },
  { heroId: 'tracer', country: 'UK', code: 'gb' },
  { heroId: 'venture', country: 'Canada', code: 'ca' },
  { heroId: 'widowmaker', country: 'France', code: 'fr' },
  { heroId: 'winston', country: null, code: null },
  { heroId: 'wrecking-ball', country: 'Australia', code: 'au' },
  { heroId: 'zarya', country: 'Russia', code: 'ru' },
  { heroId: 'zenyatta', country: 'Nepal', code: 'np' },
  { heroId: 'wuyang', country: 'China', code: 'cn' },
  { heroId: 'vendetta', country: 'Italy', code: 'it' },
  { heroId: 'anran', country: 'China', code: 'cn' },
  { heroId: 'domina', country: 'India', code: 'in' },
  { heroId: 'emre', country: 'Turkey', code: 'tr' },
  { heroId: 'mizuki', country: 'Japan', code: 'jp' },
  { heroId: 'jetpack-cat', country: null, code: null },
];

export const getCountryByHeroId = (heroId: string): HeroCountry | undefined => {
  return heroCountries.find(h => h.heroId === heroId);
};

/** All unique countries (with code) that have a known nationality */
export const knownCountries: { country: string; code: string }[] = [
  ...new Map(
    heroCountries
      .filter(
        (h): h is HeroCountry & { country: string; code: string } =>
          h.country !== null && h.code !== null,
      )
      .map(h => [h.country, { country: h.country, code: h.code }]),
  ).values(),
];
