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
  res.redirect("/");
};

exports.readNotes = (req, res, next) => {
  Note.getAll(notes => {
    res.render("read", { notes: notes });
  });
};

exports.seeNote = (req, res, next) => {
  const noteId = req.params.noteId;
  Note.getAll(notes => {
    const note = notes.find(note => note.id === noteId);
    res.render("see", { note: note });
  });
};
