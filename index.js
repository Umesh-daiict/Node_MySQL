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
  console.log("Connect to mysql server, ", data);
  con.query();
});

