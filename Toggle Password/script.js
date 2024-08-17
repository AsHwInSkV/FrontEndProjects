const input_area = document.querySelector(".input-pass");
const eye_img = document.querySelector(".pass-img");

eye_img.addEventListener("click",toggleShowPass);

function toggleShowPass(){
    if(input_area.type=="password"){
        input_area.type="text";
        eye_img.src="eye-open.png";
    }
    else if(input_area.type=="text"){
        input_area.type="password";
        eye_img.src="eye-close.png";
    }
}