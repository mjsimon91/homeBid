//Dependencies
var mysql = require('mysql');
var connection;

//Connect to mysql database
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'burgers_db'
  });
}


module.exports = connection;
