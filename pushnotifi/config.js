//for database connection
var mysql = require('mysql');

config.connection = mysql.createConnection({
  host     : 'notify',
  user     : 'user',
  password : 'user123',
  database : 'notify'
});

module.exports = config;
