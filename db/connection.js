var mysql = require("mysql2");
var util = require("util");


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "1234",
  database: "employees_db"
});

connection.connect();

connection.query = util.promisify(connection.query);

module.exports = connection;