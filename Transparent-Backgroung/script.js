const ImgBox = document.querySelector(".img-box");
const ImgWrap = document.querySelector(".img-wrap");
const originalImg = document.querySelector(".original-image");
const line = document.querySelector(".line");

originalImg.style.width = ImgBox.offsetWidth+"px";

let leftspace = ImgBox.offsetLeft;

ImgBox.onmousemove = (e)=>{
    let boxWidth = (e.pageX - leftspace)+"px"
    line.style.left = boxWidth;
    ImgWrap.style.width=boxWidth;
}
