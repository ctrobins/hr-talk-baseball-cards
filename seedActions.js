const {
  names,
  teams,
  cities,
  teamNames,
  states,
  actionTypes,
  standings
} = require("./options");
const { connectDatabase } = require("./db");

const db = connectDatabase();

const USER_ACTIONS_LIMIT = 100;

const grabRandomElement = arr => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const createRandomNumber = (low, high) => {
  return low + Math.floor(Math.random() * (high - low));
};

const actions = [];

while (actions.length < USER_ACTIONS_LIMIT) {
  actions.push({
    id: actions.length,
    time: Date.now(),
    type: grabRandomElement(actionTypes),
    cardId: createRandomNumber(1, 9999),
    player: grabRandomElement(names),
    team: grabRandomElement(teamNames),
    state: grabRandomElement(states),
    year: createRandomNumber(1950, 2019),
    edition: createRandomNumber(1, 5),
  });
}

console.log(actions);

//
//db.query(`INSERT into cards`);

//
