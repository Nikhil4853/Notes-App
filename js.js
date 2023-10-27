const notesContainer = document.querySelector(".notesContainer");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".inputBox");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes()

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}
createBtn.addEventListener("click", () => {
    let input_Box = document.createElement("p");
    let img = document.createElement("img");
    input_Box.className = "inputBox";
    input_Box.setAttribute("contenteditable", "true");
    img.src = "./images/delete.png";
    notesContainer.appendChild(input_Box).appendChild(img);

});
notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage()
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".inputBox");
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        })
    }
});