export interface Hero {
  id: string;
  name: string;
  role: 'Tank' | 'Damage' | 'Support';
  affiliation: string;
  weaponType: string;
  mobility: 'High' | 'Medium' | 'Low';
  releaseYear: number;
  image: string;
}

export const heroes: Hero[] = [
  {
    id: "ana",
    name: "Ana",
    role: "Support",
    affiliation: "Overwatch",
    weaponType: "Projectile",
    mobility: "Low",
    releaseYear: 2016,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/bltc36749d5584aa454/638a623047413e0b8807bbf4/ana-02.png"
  },
  {
    id: "ashe",
    name: "Ashe",
    role: "Damage",
    affiliation: "Deadlock Gang",
    weaponType: "Hitscan",
    mobility: "Medium",
    releaseYear: 2018,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/bltc8cad0e0dab3c5fe/638a62304be20b0b72b25151/ashe-02.png"
  },
  {
    id: "baptiste",
    name: "Baptiste",
    role: "Support",
    affiliation: "Caribbean Coalition",
    weaponType: "Hitscan",
    mobility: "High",
    releaseYear: 2019,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt46b8643c7695bd26/638a62304e86a810b3965ee8/baptiste-02.png"
  },
  {
    id: "bastion",
    name: "Bastion",
    role: "Damage",
    affiliation: "None",
    weaponType: "Hitscan",
    mobility: "Low",
    releaseYear: 2016,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/bltc5944fd5d9fec3ea/638a623047413e0b8807bbf6/bastion-02.png"
  },
  {
    id: "brigitte",
    name: "Brigitte",
    role: "Support",
    affiliation: "Overwatch",
    weaponType: "Melee",
    mobility: "Medium",
    releaseYear: 2018,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/bltaa81fd9fb9f1025c/638a62306f21bb0afab75acc/brigitte-02.png"
  },
  {
    id: "dva",
    name: "D.Va",
    role: "Tank",
    affiliation: "MEKA",
    weaponType: "Hitscan",
    mobility: "High",
    releaseYear: 2016,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt8a9121cf88dc7d3f/638a6230d47acc0bfb1870c9/dva-02.png"
  },
  {
    id: "doomfist",
    name: "Doomfist",
    role: "Tank",
    affiliation: "Talon",
    weaponType: "Melee",
    mobility: "High",
    releaseYear: 2017,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/bltceaa6cf0c3e89c97/638a6230a3c48c0b8fd51fe1/doomfist-02.png"
  },
  {
    id: "echo",
    name: "Echo",
    role: "Damage",
    affiliation: "Overwatch",
    weaponType: "Projectile",
    mobility: "High",
    releaseYear: 2020,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/bltc73027aec5ccf6ca/638a62304be20b0b72b25153/echo-02.png"
  },
  {
    id: "genji",
    name: "Genji",
    role: "Damage",
    affiliation: "Shimada Clan",
    weaponType: "Projectile",
    mobility: "High",
    releaseYear: 2016,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt5c52697eeeeef752/638a62306a25090f65315511/genji-02.png"
  },
  {
    id: "hanzo",
    name: "Hanzo",
    role: "Damage",
    affiliation: "Shimada Clan",
    weaponType: "Projectile",
    mobility: "Medium",
    releaseYear: 2016,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blte942c63420118ecb/638a62306a25090f65315513/hanzo-02.png"
  },
  {
    id: "junker-queen",
    name: "Junker Queen",
    role: "Tank",
    affiliation: "Junkers",
    weaponType: "Melee",
    mobility: "Medium",
    releaseYear: 2022,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt0207b611968bcc38/638a6230d8e4d310ae11c5f0/junker-queen-02.png"
  },
  {
    id: "junkrat",
    name: "Junkrat",
    role: "Damage",
    affiliation: "Junkers",
    weaponType: "Projectile",
    mobility: "Medium",
    releaseYear: 2016,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt25b1502a06614eb2/638a623020e7330bb5773ded/junkrat-02.png"
  },
  {
    id: "kiriko",
    name: "Kiriko",
    role: "Support",
    affiliation: "None",
    weaponType: "Projectile",
    mobility: "High",
    releaseYear: 2022,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt81698dd8dabc3a7a/638a6230ebbfae0bfd3e43ab/kiriko-02.png"
  },
  {
    id: "lucio",
    name: "Lúcio",
    role: "Support",
    affiliation: "None",
    weaponType: "Projectile",
    mobility: "High",
    releaseYear: 2016,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/bltdadf5366b633535a/638a623148aace0c1a644ef1/lucio-02.png"
  },
  {
    id: "cassidy",
    name: "Cassidy",
    role: "Damage",
    affiliation: "Overwatch",
    weaponType: "Hitscan",
    mobility: "Medium",
    releaseYear: 2016,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt1c6bc2a3c077e213/638a6230fa369c0bf93123c6/cassidy-02.png"
  },
  {
    id: "mei",
    name: "Mei",
    role: "Damage",
    affiliation: "Overwatch",
    weaponType: "Projectile",
    mobility: "Low",
    releaseYear: 2016,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt7c217592a05870e4/638a6231a3c48c0b8fd51fe5/mei-02.png"
  },
  {
    id: "mercy",
    name: "Mercy",
    role: "Support",
    affiliation: "Overwatch",
    weaponType: "Hitscan",
    mobility: "High",
    releaseYear: 2016,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/bltbcf2689b3f4b1b56/638a6231ebbfae0bfd3e43ad/mercy-02.png"
  },
  {
    id: "moira",
    name: "Moira",
    role: "Support",
    affiliation: "Talon",
    weaponType: "Beam",
    mobility: "Medium",
    releaseYear: 2017,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blte9f54c9de021d5cb/638a62314e86a810b3965eee/moira-02.png"
  },
  {
    id: "orisa",
    name: "Orisa",
    role: "Tank",
    affiliation: "None",
    weaponType: "Projectile",
    mobility: "Low",
    releaseYear: 2017,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt6dd2bd051c382701/638a6231a3c48c0b8fd51fe7/orisa-02.png"
  },
  {
    id: "pharah",
    name: "Pharah",
    role: "Damage",
    affiliation: "Overwatch",
    weaponType: "Projectile",
    mobility: "High",
    releaseYear: 2016,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/bltce1743235fa36bd1/638a62314be20b0b72b25157/pharah-02.png"
  },
  {
    id: "reaper",
    name: "Reaper",
    role: "Damage",
    affiliation: "Talon",
    weaponType: "Hitscan",
    mobility: "Medium",
    releaseYear: 2016,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt936823e9e16d6e93/638a62317e3cce0bc25c33d4/reaper-02.png"
  },
  {
    id: "reinhardt",
    name: "Reinhardt",
    role: "Tank",
    affiliation: "Overwatch",
    weaponType: "Melee",
    mobility: "Medium",
    releaseYear: 2016,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt99f809b87eff2b7b/638a6231d47acc0bfb1870cd/reinhardt-02.png"
  },
  {
    id: "roadhog",
    name: "Roadhog",
    role: "Tank",
    affiliation: "Junkers",
    weaponType: "Projectile",
    mobility: "Low",
    releaseYear: 2016,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/bltaed8c7462b8094b7/638a623148aace0c1a644ef3/roadhog-02.png"
  },
  {
    id: "sigma",
    name: "Sigma",
    role: "Tank",
    affiliation: "Talon",
    weaponType: "Projectile",
    mobility: "Medium",
    releaseYear: 2019,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt9432fe1ca6234f38/638a6231b9e2df0badfd13eb/sigma-02.png"
  },
  {
    id: "soldier-76",
    name: "Soldier: 76",
    role: "Damage",
    affiliation: "Overwatch",
    weaponType: "Hitscan",
    mobility: "Medium",
    releaseYear: 2016,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/bltbea4923d1695ad45/638a6231d8e4d310ae11c5f4/soldier-76-02.png"
  },
  {
    id: "sombra",
    name: "Sombra",
    role: "Damage",
    affiliation: "Talon",
    weaponType: "Hitscan",
    mobility: "High",
    releaseYear: 2016,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt809d839e159f0f92/638a623248aace0c1a644ef5/sombra-02.png"
  },
  {
    id: "symmetra",
    name: "Symmetra",
    role: "Damage",
    affiliation: "Vishkar Corporation",
    weaponType: "Beam",
    mobility: "Low",
    releaseYear: 2016,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blta988f28180af76a8/638a6232d47acc0bfb1870cf/symmetra-02.png"
  },
  {
    id: "torbjorn",
    name: "Torbjörn",
    role: "Damage",
    affiliation: "Overwatch",
    weaponType: "Projectile",
    mobility: "Low",
    releaseYear: 2016,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt423fa7a9bf2ae752/638a62326a25090f65315517/torbjorn-02.png"
  },
  {
    id: "tracer",
    name: "Tracer",
    role: "Damage",
    affiliation: "Overwatch",
    weaponType: "Hitscan",
    mobility: "High",
    releaseYear: 2016,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt906707fa089977d6/638a62327e3cce0bc25c33d6/tracer-02.png"
  },
  {
    id: "widowmaker",
    name: "Widowmaker",
    role: "Damage",
    affiliation: "Talon",
    weaponType: "Hitscan",
    mobility: "Medium",
    releaseYear: 2016,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt85c8cd1906de0d1b/638a6232fa369c0bf93123ca/widowmaker-02.png"
  },
  {
    id: "winston",
    name: "Winston",
    role: "Tank",
    affiliation: "Overwatch",
    weaponType: "Beam",
    mobility: "High",
    releaseYear: 2016,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/bltee8555099b79f3e3/638a6232d8e4d310ae11c5f6/winston-02.png"
  },
  {
    id: "wrecking-ball",
    name: "Wrecking Ball",
    role: "Tank",
    affiliation: "Junkers",
    weaponType: "Hitscan",
    mobility: "High",
    releaseYear: 2018,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/bltf52703bcf9014b6b/638a6232fa369c0bf93123cc/wrecking-ball-02.png"
  },
  {
    id: "zarya",
    name: "Zarya",
    role: "Tank",
    affiliation: "Russian Defense Forces",
    weaponType: "Beam",
    mobility: "Medium",
    releaseYear: 2016,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt63ef8a6cbd180ee4/638a62324e86a810b3965ef0/zarya-02.png"
  },
  {
    id: "zenyatta",
    name: "Zenyatta",
    role: "Support",
    affiliation: "Shambali",
    weaponType: "Projectile",
    mobility: "Low",
    releaseYear: 2016,
    image: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt26ab4a242bdf1a42/638a62326f21bb0afab75ace/zenyatta-02.png"
  }
];

export const getHeroById = (id: string): Hero | undefined => {
  return heroes.find(hero => hero.id === id);
};

export const getHeroByName = (name: string): Hero | undefined => {
  return heroes.find(hero => hero.name.toLowerCase() === name.toLowerCase());
};

export const getRandomHero = (): Hero => {
  return heroes[Math.floor(Math.random() * heroes.length)];
};

export const getDailyHero = (): Hero => {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  
  const seededRandom = () => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };
  
  const index = Math.floor(seededRandom() * heroes.length);
  return heroes[index];
};

export const getUniqueAffiliations = (): string[] => {
  const affiliations = heroes.map(hero => hero.affiliation);
  return [...new Set(affiliations)];
};

export const getUniqueWeaponTypes = (): string[] => {
  const weaponTypes = heroes.map(hero => hero.weaponType);
  return [...new Set(weaponTypes)];
};