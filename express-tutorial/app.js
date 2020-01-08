const express = require("express");

const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.setHeader("Content-type", "text/html");
  res.write(
    '<form action="/" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form>'
  );
  res.end();
});

app.use("/", (req, res, next) => {
  console.log("2nd middleware");
});

app.post("/", (req, res, next) => {
  console.log(req.body);

  fs.writeFile("message.txt", req.body.message, () => {
    res.status(302);
    res.redirect("/success");
    res.end();
  });
});

app.get("/success", (req, res, next) => {
  res.write("<h1>success</h1>");
});

app.listen(3000);
