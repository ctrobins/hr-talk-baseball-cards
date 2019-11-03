const {
  playerNames,
  teamNames,
  states,
} = require("./options");
const { connectDatabase } = require("./db");

const db = connectDatabase();

// these values are arbritrary and can be configured
const USER_ACTIONS_LIMIT = 1000;
const EXPECTED_CLICK_PERCENTAGE = 0.25;

const grabRandomElement = arr => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const createRandomNumber = (low, high) => {
  return low + Math.floor(Math.random() * (high - low));
};

const createRandomAction = () => Math.random() < EXPECTED_CLICK_PERCENTAGE 
  ? "click" 
  : "impression";

const getDate = () => new Date().toISOString().slice(0, 19).replace('T', ' ');

const actions = [];

while (actions.length < USER_ACTIONS_LIMIT) {
  actions.push({
    date: getDate(),
    type: createRandomAction(),
    cardId: createRandomNumber(1, 9999),
    player: grabRandomElement(playerNames),
    team: grabRandomElement(teamNames),
    state: grabRandomElement(states),
    year: createRandomNumber(1950, 2019),
    edition: createRandomNumber(1, 5)
  });
}

db.query(
  "INSERT into hackreactor_talk.actions (date, type, cardId, player, team, state, year, edition) VALUES ?",
  [actions.map(a => Object.values(a))],
  err => {
    err
      ? console.log("Error:", err)
      : console.log(`Successfully inserted ${actions.length} actions records`);
    db.end();
  }
);
