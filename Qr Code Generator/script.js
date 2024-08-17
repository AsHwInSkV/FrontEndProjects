const input = document.getElementById("input-box");
const generatebtn = document.getElementById("generatebtn");
const imagesection = document.querySelector(".img-box");
const image = document.getElementById("qr-img")

generatebtn.addEventListener("click",generateQr)

async function generateQr(){
    if(input.value.length>0){
    image.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="+input.value;
    imagesection.classList.add("show-img");
    }
    else{
        input.classList.add("error");
        setTimeout(()=>{
            input.classList.remove("error");
        },1000);
    }

}