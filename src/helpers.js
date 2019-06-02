export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function createGames(arr) {
  let tmpArr = arr;
  let games = [];
  // games = [
  //   {
  //     winners: [],
  //     losers: [],
  //     pointdiff: 0,
  //     players1: [
  //       "player1",
  //       "player2",
  //       "player3",
  //       "player4"
  //     ],
  //     players2: [
  //       "player1",
  //       "player2",
  //       "player3",
  //       "player4"
  //     ]
  //   },
  //   {
  //     winners: [],
  //     losers: [],
  //     pointdiff: 0,
  //     players1: [
  //       "player1",
  //       "player2",
  //       "player3",
  //       "player4"
  //     ],
  //     players2: [
  //       "player1",
  //       "player2",
  //       "player3",
  //       "player4"
  //     ]
  //   }
  // ]

  const playersLeftover = 0;
  while (tmpArr.length > playersLeftover) {
    const tmpGame = {
      winners: [],
      losers: [],
      pointdiff: 0,
      team1: [],
      team2: []
    };
    // team 1
    for (let i = 0; i < 4; i++) {
      console.log(Math.floor(Math.random() * tmpArr.length))
    }
    // team 2
    for (let i = 0; i < 4; i++) {
      console.log(Math.floor(Math.random() * tmpArr.length))
    }
    games.push(tmpGame);
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
