const {
  names,
  teams,
  locations,
  teamNames,
  states,
  actionTypes,
  standings
} = require("./options");
const { connectDatabase } = require("./db");

const db = connectDatabase();

const USER_ACTIONS_LIMIT = 1000;

const grabRandomElement = arr => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const actions = [];

while (actions.length < USER_ACTIONS_LIMIT) {
  actions.push({
    id: actions.length,
    time: Date.now(),
    type: grabRandomElement(actionTypes),
    player: grabRandomElement(names)
  });
}

//
//db.query(`INSERT into cards`);

//
