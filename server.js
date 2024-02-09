//모임 일정 관리해주는 서버 만들기

//1. express 모듈 설치

const express = require("express");
const app = express();
const port = 3000;

//2. express 모듈 이용하여 서버 만들기

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  res.sendFile(__dirname + "/index.html");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//form body parser
app.use(express.urlencoded({ extended: false }));

//post request from client
app.post("/result", (req, res) => {
  console.log(req.body);

  let result = req.body;

  res.send(
    `<h1>${result.name}님은 ${result.attendance}로 등록되었습니다.</h1>`
  );
});
