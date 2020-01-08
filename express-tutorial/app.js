const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (req, res, next) => {
  console.log("welcome to first middleware");
  next();
});

app.use("/", (req, res, next) => {
  console.log(req.body);
});
app.listen(3000);
