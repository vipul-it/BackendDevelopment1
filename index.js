const express = require("express");
const app = express();
require("dotenv").config();
const portcode = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("twiter page");
});

app.listen(portcode, () => {
  console.log(`Example app listening on port ${portcode}`);
});
