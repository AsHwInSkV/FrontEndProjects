const backBtn = document.getElementById("backbtn");
const nextBtn = document.getElementById("nextbtn");
const scrollContainer = document.querySelector(".gallery");

scrollContainer.addEventListener("wheel",(e)=>{
    e.preventDefault();
    scrollContainer.scrollLeft+=e.deltaY;
    scrollContainer.style.scrollBehavior = "smooth";
    
});

nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft+=310;
});
backBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft-=310;
});
