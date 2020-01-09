// imports
const express = require("express");
const parser = require("body-parser");
const router = require("./routes/main-router");

// Set up
const app = express();
app.set("view engine", "ejs")

// Middle wares
app.use(parser.urlencoded({ extended: false }));
app.use(router);

app.use(express.static("./public"))

app.listen(3000);
