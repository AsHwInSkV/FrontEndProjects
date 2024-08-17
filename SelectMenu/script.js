const selectBox = document.querySelector(".select-field");
const selectText = document.getElementById("select-text");
const optionBox = document.getElementById("list");
const arrow = document.querySelector(".arrow");
const options = document.getElementsByClassName("options")


selectBox.onclick=function(){
    optionBox.classList.toggle("hide");
    arrow.classList.toggle("rotate");
}
for(option of options){
    option.onclick=function(){
        selectText.innerHTML=this.textContent;
        optionBox.classList.toggle("hide");
        arrow.classList.toggle("rotate");
    };
}
