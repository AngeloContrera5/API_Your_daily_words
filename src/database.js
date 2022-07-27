const mysql = require("mysql2");

DB_HOST = process.env.DB_HOST;
DB_USER = process.env.DB_USER;
DB_PASSWORD = process.env.DB_PASSWORD;
DB_NAME = process.DB_NAME;

const mysqlConnection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("DB is connected");
  }
});

module.exports = mysqlConnection;
