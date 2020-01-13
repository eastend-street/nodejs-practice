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
}

module.exports = Note;
