const express = require("express");
const controller = require("../controllers/controller");
const router = express.Router();

router.get("/", controller.getHomePage);

router.get("/write", controller.writeNote);
router.post("/write", controller.postNote);

router.get("/read", controller.readNotes);

router.get("/notes/:noteId", controller.seeNote);

module.exports = router;
