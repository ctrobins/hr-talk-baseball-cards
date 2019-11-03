const mysql = require('mysql');

module.exports.connectDatabase = () => mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'hackreactor_talk'
});