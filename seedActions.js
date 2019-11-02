const {
  playerNames,
  teams,
  teamNames,
  states,
  standings
} = require("./options");
const { connectDatabase } = require("./db");

const db = connectDatabase();

const USER_ACTIONS_LIMIT = 100;
const EXPECTED_CLICK_PERCENTAGE = 0.25;

const grabRandomElement = arr => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const createRandomNumber = (low, high) => {
  return low + Math.floor(Math.random() * (high - low));
};

const createRandomAction = () => Math.random() < EXPECTED_CLICK_PERCENTAGE
  ? 'click'
  : 'impression';

const actions = [];

while (actions.length < USER_ACTIONS_LIMIT) {
  actions.push({
    id: actions.length,
    time: Date.now(),
    type: createRandomAction(),
    cardId: createRandomNumber(1, 9999),
    player: grabRandomElement(playerNames),
    team: grabRandomElement(teamNames),
    state: grabRandomElement(states),
    year: createRandomNumber(1950, 2019),
    edition: createRandomNumber(1, 5),
  });
}

console.log(actions);
let inserted = 0;

actions.forEach(action => {
  const { 
    id, time, type, cardId, player, team, 
    state, year, edition 
  } = action;
  db.query(`INSERT into user_activity
            (id, time, type, cardId, player, team, state, year, edition)
            values(${id}, ${time}, ${type}, ${cardId}, ${player}, 
              ${team}, ${state}, ${year}, ${edition})`, (err) => {
                err ? console.log('error', err) 
                    : inserted++ && console.log(inserted);
              });
});
