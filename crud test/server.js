const express = require("express");
const ejs = require("ejs");
const app = express();

const port = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

//form body parser
app.use(express.urlencoded({ extended: false }));

app.listen(port, function () {
  console.log(`Server is running on ${port}`);
});

app.get("/", function (req, res) {
  //   res.sendFile(__dirname + "/index.html");
  res.render("index");
});

app.get("/booking", function (req, res) {
  //   res.send("booking page");
  res.render("booking");
});

app.get("/statistics", function (req, res) {
  res.send("statistics page");
});

app.post("/checkResult", (req, res) => {
  console.log(req.body);
  console.log(req.body);

  let result = req.body;

  res.send(
    `<h1>${result.name}님은 ${result.attendance}로 등록되었습니다.</h1>`
  );
});
