const express = require("express");
const fs = require("fs");
const router = express.Router();

const data = [];

router.get("/", (req, res, next) => {
  res.render("index", { notes: data });
  console.log(data);
});

router.post("/note", (req, res, next) => {
  data.push(req.body);
  console.log(req.body);
  fs.appendFile("notes.txt", JSON.stringify(data), () => {
    res.status(302);
    res.redirect("/");
  });
});

module.exports = router;
