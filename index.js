const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const mysql = require("mysql2");

const con = mysql.createConnection({
  host: "localhost",
  user: process.env.sql_user,
  password: process.env.password,
});

con.connect(function (err, data) {
  if (err) {
    throw err;
  }
  console.log("### connect to mysql server ###");
  con.query("CREATE DATABASE mydb", function (err) {
    if (!err) {
      console.log("---Database created---", err);
    } else if (err.code == "ER_DB_CREATE_EXISTS") {
      console.log("---Database is ready---");
    } else {
      throw err;
    }
  });
});
