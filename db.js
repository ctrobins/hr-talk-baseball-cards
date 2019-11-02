const mysql = require('mysql');

module.exports.connectDatabase = () => mysql.createConnection({
  host     : '',
  user     : '',
  password : '',
  database : ''
});