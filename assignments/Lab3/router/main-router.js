const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views", "home.html"));
});

router.get("/leave-note", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views", "leave-note.html"));
});

router.get("/read-notes", (req, res, next) => {
  res.setHeader("Content-type", "text/html");
  let text = fs.readFileSync("notes.txt");
  res.sendFile(path.join(__dirname, "../views", "read-notes.html"));
});

router.post("/leave-note", (req, res, next) => {
  fs.appendFile("notes.txt", req.body.note, () => {
    res.redirect("/");
  });
});

router.get("*", (req, res, next) => {
  res.status(404);
  res.sendFile(path.join(__dirname, "../views", "404.html"));
});

module.exports = router;
