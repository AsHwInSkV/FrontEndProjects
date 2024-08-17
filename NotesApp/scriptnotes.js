const createButton = document.getElementById("CreateBtn");
const deleteButton = document.getElementById("deleteBtn");
const notesSection = document.querySelector(".notes-container");

createButton.addEventListener("click",createNoteArea);

function updateStorage(){
    localStorage.setItem("data",notesSection.innerHTML);
}
function showNotes(){
    notesSection.innerHTML=localStorage.getItem("data");
}
showNotes();

function createNoteArea(){
    let p = document.createElement("p");
    p.setAttribute("contenteditable","true");
    let img =document.createElement("img");
    p.className="input-box";
    img.src="./images/delete.png";
    notesSection.appendChild(p).appendChild(img);
}

notesSection.addEventListener("click",(e)=>{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==="P"){
        let notes = document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
});

