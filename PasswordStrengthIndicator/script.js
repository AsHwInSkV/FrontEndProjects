const password_field = document.getElementById("password");
const error = document.getElementById("error-message");
const errorMessage = document.getElementById("message");
const container = document.querySelector(".pass-input");

password_field.addEventListener("input",checkStrength);

function checkStrength(){
    if(password_field.value.length>0){
        errorMessage.style.display="block";
    }
    else{
        errorMessage.style.display="none";
    }
    if(password_field.value.length<4){
        error.innerHTML="weak";
        errorMessage.style.color="red";
        password_field.style.color="red";
        container.style.borderColor="red";
    }
    else if(password_field.value.length>4 && password_field.value.length<8){
        error.innerHTML="medium";
        errorMessage.style.color="yellow";
        password_field.style.color="yellow";
        container.style.borderColor="yellow";
    }
    else if(password_field.value.length>=8){
        error.innerHTML="strong";
        errorMessage.style.color="green";
        password_field.style.color="green";
        container.style.borderColor="green";
    }
}