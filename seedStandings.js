const {
  standings,
} = require("./options");
const { connectDatabase } = require("./db");

const db = connectDatabase();

db.query(
    "INSERT into hackreactor_talk.standings (team, wins, losses) VALUES ?",
    [standings.map(s => Object.values(s))],
    err => {
      err
        ? console.log("Error:", err)
        : console.log(`Successfully inserted ${standings.length} standings records`);
      db.end();
    }
  );