const express = require("express");
const ejs = require("ejs");
const app = express();

const port = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function () {
  console.log(`Server is running on ${port}`);
});

app.get("/", function (req, res) {
  //   res.sendFile(__dirname + "/index.html");
  res.render("index");
});

app.get("/booking", function (req, res) {
  res.send("booking page");
});

app.get("/statistics", function (req, res) {
  res.send("statistics page");
});
