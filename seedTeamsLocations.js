const {
  teams,
} = require("./options");
const { connectDatabase } = require("./db");

const db = connectDatabase();

db.query(
    "INSERT into hackreactor_talk.teams_locations (location, team, state) VALUES ?",
    [teams.map(t => Object.values(t))],
    err => {
      err
        ? console.log("Error:", err)
        : console.log(`Successfully inserted ${teams.length} teams_locations records`);
      db.end();
    }
  );