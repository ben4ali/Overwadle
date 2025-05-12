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
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png"
  },
  {
    id: "ashe",
    name: "Ashe",
    role: "Damage",
    affiliation: "Deadlock Gang",
    weaponType: "Hitscan",
    mobility: "Medium",
    releaseYear: 2018,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8dc2a024c9b7d95c7141b2ef065590dbc8d9018d12ad15f76b01923986702228.png"
  },
  {
    id: "baptiste",
    name: "Baptiste",
    role: "Support",
    affiliation: "Caribbean Coalition",
    weaponType: "Hitscan",
    mobility: "High",
    releaseYear: 2019,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f979896f74ba22db2a92a85ae1260124ab0a26665957a624365e0f96e5ac5b5c.png"
  },
  {
    id: "bastion",
    name: "Bastion",
    role: "Damage",
    affiliation: "None",
    weaponType: "Hitscan",
    mobility: "Low",
    releaseYear: 2016,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4d715f722c42215072b5dd0240904aaed7b5285df0b2b082d0a7f1865b5ea992.png"
  },
  {
    id: "brigitte",
    name: "Brigitte",
    role: "Support",
    affiliation: "Overwatch",
    weaponType: "Melee",
    mobility: "Medium",
    releaseYear: 2018,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/48392820c6976ee1cd8dde13e71df85bf15560083ee5c8658fe7c298095d619a.png"
  },
  {
    id: "dva",
    name: "D.Va",
    role: "Tank",
    affiliation: "MEKA",
    weaponType: "Hitscan",
    mobility: "High",
    releaseYear: 2016,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ca114f72193e4d58a85c087e9409242f1a31e808cf4058678b8cbf767c2a9a0a.png"
  },
  {
    id: "doomfist",
    name: "Doomfist",
    role: "Tank",
    affiliation: "Talon",
    weaponType: "Melee",
    mobility: "High",
    releaseYear: 2017,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/13750471c693c1a360eb19d5ace229c8599a729cd961d72ebee0e157657b7d18.png"
  },
  {
    id: "echo",
    name: "Echo",
    role: "Damage",
    affiliation: "Overwatch",
    weaponType: "Projectile",
    mobility: "High",
    releaseYear: 2020,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f086bf235cc6b7f138609594218a8385c8e5f6405a39eceb0deb9afb429619fe.png"
  },
  {
    id: "genji",
    name: "Genji",
    role: "Damage",
    affiliation: "Shimada Clan",
    weaponType: "Projectile",
    mobility: "High",
    releaseYear: 2016,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4edf5ea6d58c449a2aeb619a3fda9fff36a069dfbe4da8bc5d8ec1c758ddb8dc.png"
  },
  {
    id: "hanzo",
    name: "Hanzo",
    role: "Damage",
    affiliation: "Shimada Clan",
    weaponType: "Projectile",
    mobility: "Medium",
    releaseYear: 2016,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/aecd8fa677f0093344fab7ccb7c37516c764df3f5ff339a5a845a030a27ba7e0.png"
  },
  {
    id: "junker-queen",
    name: "Junker Queen",
    role: "Tank",
    affiliation: "Junkers",
    weaponType: "Melee",
    mobility: "Medium",
    releaseYear: 2022,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b4fa5f937fe07ef56c78bca80be9602c062b8d4451692aecff50e2f68c5c6476.png"
  },
  {
    id: "junkrat",
    name: "Junkrat",
    role: "Damage",
    affiliation: "Junkers",
    weaponType: "Projectile",
    mobility: "Medium",
    releaseYear: 2016,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/037e3df083624e5480f8996821287479a375f62b470572a22773da0eaf9441d0.png"
  },
  {
    id: "kiriko",
    name: "Kiriko",
    role: "Support",
    affiliation: "None",
    weaponType: "Projectile",
    mobility: "High",
    releaseYear: 2022,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/088aff2153bdfa426984b1d5c912f6af0ab313f0865a81be0edd114e9a2f79f9.png"
  },
  {
    id: "lucio",
    name: "Lúcio",
    role: "Support",
    affiliation: "None",
    weaponType: "Projectile",
    mobility: "High",
    releaseYear: 2016,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e2ff2527610a0fbe0c9956f80925123ef3e66c213003e29d37436de30b90e4e1.png"
  },
  {
    id: "cassidy",
    name: "Cassidy",
    role: "Damage",
    affiliation: "Overwatch",
    weaponType: "Hitscan",
    mobility: "Medium",
    releaseYear: 2016,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6cfb48b5597b657c2eafb1277dc5eef4a07eae90c265fcd37ed798189619f0a5.png"
  },
  {
    id: "mei",
    name: "Mei",
    role: "Damage",
    affiliation: "Overwatch",
    weaponType: "Projectile",
    mobility: "Low",
    releaseYear: 2016,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1533fcb0ee1d3f9586f84b4067c6f63eca3322c1c661f69bfb41cd9e4f4bcc11.png"
  },
  {
    id: "mercy",
    name: "Mercy",
    role: "Support",
    affiliation: "Overwatch",
    weaponType: "Hitscan",
    mobility: "High",
    releaseYear: 2016,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2508ddd39a178d5f6ae993ab43eeb3e7961e5a54a9507e6ae347381193f28943.png"
  },
  {
    id: "moira",
    name: "Moira",
    role: "Support",
    affiliation: "Talon",
    weaponType: "Beam",
    mobility: "Medium",
    releaseYear: 2017,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/000beeb5606e01497897fa9210dd3b1e78e1159ebfd8afdc9e989047d7d3d08f.png"
  },
  {
    id: "orisa",
    name: "Orisa",
    role: "Tank",
    affiliation: "None",
    weaponType: "Projectile",
    mobility: "Low",
    releaseYear: 2017,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/71e96294617e81051d120b5d04b491bb1ea40e2933da44d6631aae149aac411d.png"
  },
  {
    id: "pharah",
    name: "Pharah",
    role: "Damage",
    affiliation: "Overwatch",
    weaponType: "Projectile",
    mobility: "High",
    releaseYear: 2016,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f8261595eca3e43e3b37cadb8161902cc416e38b7e0caa855f4555001156d814.png"
  },
  {
    id: "reaper",
    name: "Reaper",
    role: "Damage",
    affiliation: "Talon",
    weaponType: "Hitscan",
    mobility: "Medium",
    releaseYear: 2016,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2edb9af69d987bb503cd31f7013ae693640e692b321a73d175957b9e64394f40.png"
  },
  {
    id: "reinhardt",
    name: "Reinhardt",
    role: "Tank",
    affiliation: "Overwatch",
    weaponType: "Melee",
    mobility: "Medium",
    releaseYear: 2016,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/490d2f79f8547d6e364306af60c8184fb8024b8e55809e4cc501126109981a65.png"
  },
  {
    id: "roadhog",
    name: "Roadhog",
    role: "Tank",
    affiliation: "Junkers",
    weaponType: "Projectile",
    mobility: "Low",
    releaseYear: 2016,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/72e02e747b66b61fcbc02d35d350770b3ec7cbaabd0a7ca17c0d82743d43a7e8.png"
  },
  {
    id: "sigma",
    name: "Sigma",
    role: "Tank",
    affiliation: "Talon",
    weaponType: "Projectile",
    mobility: "Medium",
    releaseYear: 2019,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/cd7a4c0a0df8924afb2c9f6df864ed040f20250440c36ca2eb634acf6609c5e4.png"
  },
  {
    id: "soldier-76",
    name: "Soldier: 76",
    role: "Damage",
    affiliation: "Overwatch",
    weaponType: "Hitscan",
    mobility: "Medium",
    releaseYear: 2016,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/20b4ef00ed05d6dba75df228241ed528df7b6c9556f04c8070bad1e2f89e0ff5.png"
  },
  {
    id: "sombra",
    name: "Sombra",
    role: "Damage",
    affiliation: "Talon",
    weaponType: "Hitscan",
    mobility: "High",
    releaseYear: 2016,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bca8532688f01b071806063b9472f1c0f9fc9c7948e6b59e210006e69cec9022.png"
  },
  {
    id: "symmetra",
    name: "Symmetra",
    role: "Damage",
    affiliation: "Vishkar Corporation",
    weaponType: "Beam",
    mobility: "Low",
    releaseYear: 2016,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7f2024c5387c9d76d944a5db021c2774d1e9d7cbf39e9b6a35b364d38ea250ac.png"
  },
  {
    id: "torbjorn",
    name: "Torbjörn",
    role: "Damage",
    affiliation: "Overwatch",
    weaponType: "Projectile",
    mobility: "Low",
    releaseYear: 2016,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1309ab1add1cc19189a2c8bc7b1471f88efa1073e9705d2397fdb37d45707d01.png"
  },
  {
    id: "tracer",
    name: "Tracer",
    role: "Damage",
    affiliation: "Overwatch",
    weaponType: "Hitscan",
    mobility: "High",
    releaseYear: 2016,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a66413200e934da19540afac965cfe8a2de4ada593d9a52d53108bb28e8bbc9c.png"
  },
  {
    id: "widowmaker",
    name: "Widowmaker",
    role: "Damage",
    affiliation: "Talon",
    weaponType: "Hitscan",
    mobility: "Medium",
    releaseYear: 2016,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a714f1cb33cc91c6b5b3e89ffe7e325b99e7c89cc8e8feced594f81305147efe.png"
  },
  {
    id: "winston",
    name: "Winston",
    role: "Tank",
    affiliation: "Overwatch",
    weaponType: "Beam",
    mobility: "High",
    releaseYear: 2016,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bd9c8e634d89488459dfc1aeb21b602fa5c39aa05601a4167682f3a3fed4e0ee.png"
  },
  {
    id: "wrecking-ball",
    name: "Wrecking Ball",
    role: "Tank",
    affiliation: "Junkers",
    weaponType: "Hitscan",
    mobility: "High",
    releaseYear: 2018,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5c18e39ce567ee8a84078f775b9f76a2ba891de601c059a3d2b46b61ae4afb42.png"
  },
  {
    id: "zarya",
    name: "Zarya",
    role: "Tank",
    affiliation: "Russian Defense Forces",
    weaponType: "Beam",
    mobility: "Medium",
    releaseYear: 2016,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8819ba85823136640d8eba2af6fd7b19d46b9ee8ab192a4e06f396d1e5231f7a.png"
  },
  {
    id: "zenyatta",
    name: "Zenyatta",
    role: "Support",
    affiliation: "Shambali",
    weaponType: "Projectile",
    mobility: "Low",
    releaseYear: 2016,
    image: "https://d15f34w2p8l1cc.cloudfront.net/overwatch/71cabc939c577581f66b952f9c70891db779251e8e70f29de3c7bf494edacfe4.png"
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