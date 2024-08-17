const toggle = document.querySelector(".switch");
const slider = document.querySelector(".slider");
const container = document.querySelector(".container");
 slider.addEventListener("click",toggleButton)

 function toggleButton(){
    if(toggle.classList.contains("move")){
        toggle.classList.remove("move");
        container.style.background="white";
    }
    else{
        toggle.classList.add("move");
        container.style.background="black";
    }
 }