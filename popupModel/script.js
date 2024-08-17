const submitBtn = document.querySelector(".submitBtn");
const okBtn = document.querySelector(".ok-btn");
const popUp = document.querySelector(".popup");

submitBtn.addEventListener("click",createPopUp);
okBtn.addEventListener("click",removePopUp);

function createPopUp(){
    popUp.classList.add("open-popup");
}
function removePopUp(){
    
    popUp.classList.remove("open-popup");
}