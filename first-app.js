const http = require("http");
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Hello");
  next();
});

app.use((req, res, next) => {
  console.log("Hello again!");
  res.send("<h1>Hello Nodejs</h1>");
});

app.listen(3000);
