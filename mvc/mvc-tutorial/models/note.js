const fs = require("fs");
const path = require("path");

const p = path.join(__dirname, "../data", "notes.json");

class Note {
  constructor(author, title, content) {
    this.author = author;
    this.title = title;
    this.content = content;
  }

  saveNote() {
    this.id = Math.random().toString();
    fs.readFile(p, (err, data) => {
      const noteArr = JSON.parse(data);
      noteArr.push(this);

      fs.writeFile(p, JSON.stringify(noteArr), err => {
        console.log(err);
      });
    });
  }

  static getAll(callback) {
    fs.readFile(p, (err, data) => {
      if (err) {
        callback([]);
      }
      callback(JSON.parse(data));
    });
  }

  static deleteNote(id) {
    this.getAll(notes => {
      const updatedNotes = notes.filter(note => note.id != id);
      fs.writeFile(p, JSON.stringify(updatedNotes), (err, data) => {
        console.log(data);
      });
    });
  }

  static updatedNote(id, title, content) {
    this.getAll(notes => {
      const noteToChange = notes.find(note => note.id === id);
      noteToChange.title = title;
      noteToChange.content = content;

      fs.writeFile(p, JSON.stringify(notes), (err, data) => {
        console.log(data);
      });
    });
  }
}

module.exports = Note;
