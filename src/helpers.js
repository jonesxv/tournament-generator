export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function createGames(players, rounds) {
  let games = {};

  const playersLeftover = 0;
  for (let r = 0; r < rounds; r ++) {
    let tmpArr = Object.keys(players);
    games[`round${r + 1}`] = [];
    while (tmpArr.length > playersLeftover) {
      const tmpGame = {
        winners: [],
        losers: [],
        pointdiff: 0,
        team1: [],
        team2: []
      };
      let tmpIdx = 0;
      
      // team 1
      for (let i = 0; i < 4; i++) {
        tmpIdx = Math.floor(Math.random() * tmpArr.length);
        console.log(`player ${i + 1}: ${tmpArr[tmpIdx]}`)
        tmpGame.team1.push(tmpArr[tmpIdx])
        tmpArr.splice(tmpIdx, 1);
      }
      // team 2
      for (let i = 0; i < 4; i++) {
        tmpIdx = Math.floor(Math.random() * tmpArr.length);
        tmpGame.team2.push(tmpArr[tmpIdx])
        tmpArr.splice(tmpIdx, 1);
      }
      games[`round${r + 1}`].push(tmpGame);
    }

  }

  return games;
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function getFunName() {
  const adjectives = [
    "adorable",
    "beautiful",
    "clean",
    "drab",
    "elegant",
    "fancy",
    "glamorous",
    "handsome",
    "long",
    "magnificent",
    "old-fashioned",
    "plain",
    "quaint",
    "sparkling",
    "ugliest",
    "unsightly",
    "angry",
    "bewildered",
    "clumsy",
    "defeated",
    "embarrassed",
    "fierce",
    "grumpy",
    "helpless",
    "itchy",
    "jealous",
    "lazy",
    "mysterious",
    "nervous",
    "obnoxious",
    "panicky",
    "repulsive",
    "scary",
    "thoughtless",
    "uptight",
    "worried"
  ];

  const nouns = [
    "women",
    "men",
    "children",
    "teeth",
    "feet",
    "people",
    "leaves",
    "mice",
    "geese",
    "halves",
    "knives",
    "wives",
    "lives",
    "elves",
    "loaves",
    "potatoes",
    "tomatoes",
    "cacti",
    "foci",
    "fungi",
    "nuclei",
    "syllabuses",
    "analyses",
    "diagnoses",
    "oases",
    "theses",
    "crises",
    "phenomena",
    "criteria",
    "data"
  ];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}
