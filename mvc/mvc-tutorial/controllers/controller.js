const Note = require("../models/note");

exports.getHomePage = (req, res, next) => {
  res.render("home");
};

exports.writeNote = (req, res, next) => {
  res.render("write");
};

exports.postNote = (req, res, next) => {
  const note = new Note(req.body.author, req.body.content, req.body.content);
  console.log(note);
  note.saveNote();
};

exports.readNotes = (req, res, next) => {
  const notes = Note.getAll(notes => {
    res.render("read", { notes: notes });
  });
  console.log(notes);
  // res.render("read", { notes: notes });
};
