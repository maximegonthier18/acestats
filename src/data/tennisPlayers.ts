export interface TennisMatch {
  date: string;
  tournament: string;
  surface: string;
  round: string;
  opponent: string;
  score: string;
  result: "W" | "L";
}

export interface RankingEntry {
  date: string;
  rank: number;
  points: number;
}

export interface TennisPlayer {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  country: string;
  countryCode: string;
  birthDate: string;
  age: number;
  height: string;
  weight: string;
  hand: string;
  backhand: string;
  currentRank: number;
  highestRank: number;
  careerTitles: number;
  grandSlams: number;
  winRate: number;
  totalWins: number;
  totalLosses: number;
  prizeMoney: string;
  imageUrl: string;
  rankingHistory: RankingEntry[];
  recentMatches: TennisMatch[];
  surfaceStats: { surface: string; wins: number; losses: number }[];
}

export const tennisPlayers: TennisPlayer[] = [
  {
    id: "novak-djokovic",
    name: "Novak Djokovic",
    firstName: "Novak",
    lastName: "Djokovic",
    country: "Serbie",
    countryCode: "🇷🇸",
    birthDate: "1987-05-22",
    age: 38,
    height: "1m88",
    weight: "77kg",
    hand: "Droitier",
    backhand: "Revers à deux mains",
    currentRank: 7,
    highestRank: 1,
    careerTitles: 99,
    grandSlams: 24,
    winRate: 83.2,
    totalWins: 1120,
    totalLosses: 225,
    prizeMoney: "$185M",
    imageUrl: "",
    rankingHistory: [
      { date: "2024-01", rank: 1, points: 10955 },
      { date: "2024-03", rank: 1, points: 11245 },
      { date: "2024-06", rank: 2, points: 8360 },
      { date: "2024-09", rank: 4, points: 7460 },
      { date: "2024-12", rank: 7, points: 5400 },
      { date: "2025-03", rank: 7, points: 4900 },
      { date: "2025-06", rank: 6, points: 5100 },
      { date: "2025-09", rank: 5, points: 5400 },
      { date: "2025-12", rank: 7, points: 4800 },
      { date: "2026-03", rank: 7, points: 4500 },
    ],
    recentMatches: [
      { date: "2026-03-10", tournament: "Indian Wells", surface: "Dur", round: "R16", opponent: "A. Rublev", score: "6-4 3-6 6-3", result: "W" },
      { date: "2026-03-05", tournament: "Indian Wells", surface: "Dur", round: "R32", opponent: "T. Paul", score: "7-5 6-3", result: "W" },
      { date: "2026-02-20", tournament: "Dubai", surface: "Dur", round: "QF", opponent: "C. Alcaraz", score: "4-6 6-7", result: "L" },
      { date: "2026-02-18", tournament: "Dubai", surface: "Dur", round: "R16", opponent: "H. Rune", score: "6-2 6-4", result: "W" },
      { date: "2026-01-28", tournament: "Open d'Australie", surface: "Dur", round: "SF", opponent: "J. Sinner", score: "6-7 4-6 6-3 3-6", result: "L" },
    ],
    surfaceStats: [
      { surface: "Dur", wins: 490, losses: 95 },
      { surface: "Terre battue", wins: 280, losses: 55 },
      { surface: "Gazon", wins: 120, losses: 25 },
      { surface: "Tapis", wins: 55, losses: 10 },
    ],
  },
  {
    id: "carlos-alcaraz",
    name: "Carlos Alcaraz",
    firstName: "Carlos",
    lastName: "Alcaraz",
    country: "Espagne",
    countryCode: "🇪🇸",
    birthDate: "2003-05-05",
    age: 22,
    height: "1m83",
    weight: "74kg",
    hand: "Droitier",
    backhand: "Revers à deux mains",
    currentRank: 2,
    highestRank: 1,
    careerTitles: 19,
    grandSlams: 4,
    winRate: 79.8,
    totalWins: 195,
    totalLosses: 49,
    prizeMoney: "$38M",
    imageUrl: "",
    rankingHistory: [
      { date: "2024-01", rank: 2, points: 8855 },
      { date: "2024-03", rank: 2, points: 9100 },
      { date: "2024-06", rank: 2, points: 8580 },
      { date: "2024-09", rank: 1, points: 9900 },
      { date: "2024-12", rank: 3, points: 8100 },
      { date: "2025-03", rank: 2, points: 8800 },
      { date: "2025-06", rank: 1, points: 10200 },
      { date: "2025-09", rank: 1, points: 11000 },
      { date: "2025-12", rank: 2, points: 9600 },
      { date: "2026-03", rank: 2, points: 9200 },
    ],
    recentMatches: [
      { date: "2026-03-12", tournament: "Indian Wells", surface: "Dur", round: "QF", opponent: "D. Medvedev", score: "7-6 6-4", result: "W" },
      { date: "2026-03-10", tournament: "Indian Wells", surface: "Dur", round: "R16", opponent: "S. Tsitsipas", score: "6-3 6-1", result: "W" },
      { date: "2026-02-20", tournament: "Dubai", surface: "Dur", round: "F", opponent: "J. Sinner", score: "6-4 3-6 7-5", result: "W" },
      { date: "2026-02-18", tournament: "Dubai", surface: "Dur", round: "SF", opponent: "N. Djokovic", score: "6-4 7-6", result: "W" },
      { date: "2026-01-28", tournament: "Open d'Australie", surface: "Dur", round: "F", opponent: "J. Sinner", score: "3-6 6-3 6-4 6-2", result: "W" },
    ],
    surfaceStats: [
      { surface: "Dur", wins: 95, losses: 25 },
      { surface: "Terre battue", wins: 60, losses: 12 },
      { surface: "Gazon", wins: 30, losses: 8 },
    ],
  },
  {
    id: "jannik-sinner",
    name: "Jannik Sinner",
    firstName: "Jannik",
    lastName: "Sinner",
    country: "Italie",
    countryCode: "🇮🇹",
    birthDate: "2001-08-16",
    age: 24,
    height: "1m92",
    weight: "76kg",
    hand: "Droitier",
    backhand: "Revers à deux mains",
    currentRank: 1,
    highestRank: 1,
    careerTitles: 22,
    grandSlams: 3,
    winRate: 78.5,
    totalWins: 230,
    totalLosses: 63,
    prizeMoney: "$32M",
    imageUrl: "",
    rankingHistory: [
      { date: "2024-01", rank: 4, points: 6490 },
      { date: "2024-03", rank: 3, points: 8200 },
      { date: "2024-06", rank: 1, points: 9890 },
      { date: "2024-09", rank: 1, points: 11180 },
      { date: "2024-12", rank: 1, points: 11830 },
      { date: "2025-03", rank: 1, points: 12500 },
      { date: "2025-06", rank: 1, points: 11800 },
      { date: "2025-09", rank: 2, points: 10400 },
      { date: "2025-12", rank: 1, points: 11200 },
      { date: "2026-03", rank: 1, points: 10800 },
    ],
    recentMatches: [
      { date: "2026-03-12", tournament: "Indian Wells", surface: "Dur", round: "QF", opponent: "A. Zverev", score: "6-3 7-5", result: "W" },
      { date: "2026-02-20", tournament: "Dubai", surface: "Dur", round: "F", opponent: "C. Alcaraz", score: "4-6 6-3 5-7", result: "L" },
      { date: "2026-01-28", tournament: "Open d'Australie", surface: "Dur", round: "F", opponent: "C. Alcaraz", score: "6-3 3-6 4-6 2-6", result: "L" },
      { date: "2026-01-25", tournament: "Open d'Australie", surface: "Dur", round: "SF", opponent: "N. Djokovic", score: "7-6 6-4 3-6 6-3", result: "W" },
      { date: "2026-01-22", tournament: "Open d'Australie", surface: "Dur", round: "QF", opponent: "A. de Minaur", score: "6-2 6-4 6-1", result: "W" },
    ],
    surfaceStats: [
      { surface: "Dur", wins: 130, losses: 30 },
      { surface: "Terre battue", wins: 55, losses: 18 },
      { surface: "Gazon", wins: 25, losses: 10 },
    ],
  },
  {
    id: "alexander-zverev",
    name: "Alexander Zverev",
    firstName: "Alexander",
    lastName: "Zverev",
    country: "Allemagne",
    countryCode: "🇩🇪",
    birthDate: "1997-04-20",
    age: 28,
    height: "1m98",
    weight: "90kg",
    hand: "Droitier",
    backhand: "Revers à une main",
    currentRank: 3,
    highestRank: 2,
    careerTitles: 25,
    grandSlams: 1,
    winRate: 72.1,
    totalWins: 460,
    totalLosses: 178,
    prizeMoney: "$48M",
    imageUrl: "",
    rankingHistory: [
      { date: "2024-01", rank: 7, points: 5165 },
      { date: "2024-03", rank: 5, points: 6700 },
      { date: "2024-06", rank: 4, points: 7975 },
      { date: "2024-09", rank: 3, points: 7615 },
      { date: "2024-12", rank: 2, points: 8135 },
      { date: "2025-03", rank: 3, points: 7800 },
      { date: "2025-06", rank: 2, points: 9100 },
      { date: "2025-09", rank: 3, points: 8200 },
      { date: "2025-12", rank: 3, points: 8500 },
      { date: "2026-03", rank: 3, points: 8100 },
    ],
    recentMatches: [
      { date: "2026-03-12", tournament: "Indian Wells", surface: "Dur", round: "QF", opponent: "J. Sinner", score: "3-6 5-7", result: "L" },
      { date: "2026-03-10", tournament: "Indian Wells", surface: "Dur", round: "R16", opponent: "C. Ruud", score: "6-4 6-3", result: "W" },
      { date: "2026-02-20", tournament: "Dubai", surface: "Dur", round: "SF", opponent: "D. Medvedev", score: "7-5 6-4", result: "W" },
      { date: "2026-01-25", tournament: "Open d'Australie", surface: "Dur", round: "QF", opponent: "T. Fritz", score: "4-6 6-4 7-6 6-3", result: "W" },
    ],
    surfaceStats: [
      { surface: "Dur", wins: 210, losses: 80 },
      { surface: "Terre battue", wins: 130, losses: 45 },
      { surface: "Gazon", wins: 50, losses: 25 },
    ],
  },
  {
    id: "rafael-nadal",
    name: "Rafael Nadal",
    firstName: "Rafael",
    lastName: "Nadal",
    country: "Espagne",
    countryCode: "🇪🇸",
    birthDate: "1986-06-03",
    age: 39,
    height: "1m85",
    weight: "85kg",
    hand: "Gaucher",
    backhand: "Revers à deux mains",
    currentRank: 0,
    highestRank: 1,
    careerTitles: 92,
    grandSlams: 22,
    winRate: 83.1,
    totalWins: 1080,
    totalLosses: 220,
    prizeMoney: "$135M",
    imageUrl: "",
    rankingHistory: [
      { date: "2020-01", rank: 1, points: 9985 },
      { date: "2020-06", rank: 2, points: 9850 },
      { date: "2021-01", rank: 2, points: 9875 },
      { date: "2021-06", rank: 3, points: 8270 },
      { date: "2022-01", rank: 5, points: 6875 },
      { date: "2022-06", rank: 4, points: 7595 },
      { date: "2023-01", rank: 2, points: 8820 },
      { date: "2023-06", rank: 14, points: 3855 },
      { date: "2024-01", rank: 672, points: 200 },
      { date: "2024-10", rank: 0, points: 0 },
    ],
    recentMatches: [
      { date: "2024-11-19", tournament: "Coupe Davis", surface: "Dur", round: "QF", opponent: "B. van de Zandschulp", score: "4-6 4-6", result: "L" },
      { date: "2024-10-28", tournament: "ATP 250 Stockholm", surface: "Dur intérieur", round: "R16", opponent: "C. Norrie", score: "3-6 6-4 5-7", result: "L" },
    ],
    surfaceStats: [
      { surface: "Dur", wins: 390, losses: 90 },
      { surface: "Terre battue", wins: 480, losses: 45 },
      { surface: "Gazon", wins: 80, losses: 35 },
    ],
  },
  {
    id: "roger-federer",
    name: "Roger Federer",
    firstName: "Roger",
    lastName: "Federer",
    country: "Suisse",
    countryCode: "🇨🇭",
    birthDate: "1981-08-08",
    age: 44,
    height: "1m85",
    weight: "85kg",
    hand: "Droitier",
    backhand: "Revers à une main",
    currentRank: 0,
    highestRank: 1,
    careerTitles: 103,
    grandSlams: 20,
    winRate: 82.0,
    totalWins: 1251,
    totalLosses: 275,
    prizeMoney: "$130M",
    imageUrl: "",
    rankingHistory: [
      { date: "2018-01", rank: 1, points: 10265 },
      { date: "2019-01", rank: 3, points: 6420 },
      { date: "2020-01", rank: 3, points: 6590 },
      { date: "2021-01", rank: 5, points: 4215 },
      { date: "2022-01", rank: 16, points: 2385 },
      { date: "2022-09", rank: 0, points: 0 },
    ],
    recentMatches: [
      { date: "2022-09-23", tournament: "Laver Cup", surface: "Dur intérieur", round: "Exhibition", opponent: "R. Nadal / J. Sock & F. Tiafoe", score: "6-4 3-6 9-11", result: "L" },
    ],
    surfaceStats: [
      { surface: "Dur", wins: 580, losses: 125 },
      { surface: "Terre battue", wins: 225, losses: 65 },
      { surface: "Gazon", wins: 195, losses: 30 },
    ],
  },
  {
    id: "daniil-medvedev",
    name: "Daniil Medvedev",
    firstName: "Daniil",
    lastName: "Medvedev",
    country: "Russie",
    countryCode: "🇷🇺",
    birthDate: "1996-02-11",
    age: 30,
    height: "1m98",
    weight: "83kg",
    hand: "Droitier",
    backhand: "Revers à deux mains",
    currentRank: 5,
    highestRank: 1,
    careerTitles: 21,
    grandSlams: 1,
    winRate: 68.9,
    totalWins: 340,
    totalLosses: 153,
    prizeMoney: "$40M",
    imageUrl: "",
    rankingHistory: [
      { date: "2024-01", rank: 3, points: 7165 },
      { date: "2024-06", rank: 5, points: 6275 },
      { date: "2024-12", rank: 5, points: 5780 },
      { date: "2025-06", rank: 4, points: 6200 },
      { date: "2025-12", rank: 5, points: 5600 },
      { date: "2026-03", rank: 5, points: 5800 },
    ],
    recentMatches: [
      { date: "2026-03-12", tournament: "Indian Wells", surface: "Dur", round: "QF", opponent: "C. Alcaraz", score: "6-7 4-6", result: "L" },
      { date: "2026-03-10", tournament: "Indian Wells", surface: "Dur", round: "R16", opponent: "F. Cerundolo", score: "6-3 6-4", result: "W" },
    ],
    surfaceStats: [
      { surface: "Dur", wins: 250, losses: 80 },
      { surface: "Terre battue", wins: 50, losses: 40 },
      { surface: "Gazon", wins: 30, losses: 20 },
    ],
  },
];

export function searchPlayers(query: string): TennisPlayer[] {
  const q = query.toLowerCase().trim();
  if (!q) return tennisPlayers;
  return tennisPlayers.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.country.toLowerCase().includes(q) ||
      p.firstName.toLowerCase().includes(q) ||
      p.lastName.toLowerCase().includes(q)
  );
}

export function getPlayerById(id: string): TennisPlayer | undefined {
  return tennisPlayers.find((p) => p.id === id);
}
