const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

//localStorage.clear();
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updatestorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () =>{
        let inputBox = document.createElement("p");
        let img = document.createElement("img");
        img.src = "images/delete.png";
        inputBox.className = "input-box";
        inputBox.setAttribute("contenteditable", "true");
        notesContainer.appendChild(inputBox).appendChild(img);
        
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updatestorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updatestorage();
            }
        })
    }
})


document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
