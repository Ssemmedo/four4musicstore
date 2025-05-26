const bcrypt = require("bcrypt");
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const Database = require("./database/db");

app.use(bodyParser.json());

Database().connect((err) => {
  if (err) throw err;
  console.log("Database connected " + Database().threadId);
});

app.get("/", async (req, res) => {
  Database().query("SELECT * FROM user", (err, rows, field) => {
    if (err) {
      console.error(err.stack);
      res.status(500).send("Error fetching data");
      return;
    }
    res.json(rows);
  });
});

app.listen(process.env.PORT || 5000, console.log("app listening"));
