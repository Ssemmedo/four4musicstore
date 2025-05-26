function Database() {
  const mysql = require("mysql");
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
  });

  return(connection)
}

module.exports =Database;