console.log("hey!");

const myNotes = document.getElementById("my-notes");
console.log(myNotes.children);

for (let i = 0; i < myNotes.children.length; i++) {
  myNotes.children[i].addEventListener("click", element => {
    if (element.target.style.backgroundColor === "yellow") {
      element.target.style.backgroundColor = "aquamarine";
    } else {
      element.target.style.backgroundColor = "yellow";
    }
  });
}
