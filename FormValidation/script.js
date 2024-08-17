const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phno-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("form-error");

function validateName(){
    let name = document.getElementById("contact-name").value;

    if(name.length==0){
        nameError.innerHTML="Enter a Name";
        return false 
   }
    else if(!name.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)){
        nameError.innerHTML="Enter full name";
        return false
    }
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateNumber(){
    let number = document.getElementById("contact-phone").value;
    if(number.length==0){
        phoneError.innerHTML="Ph no is required";
        return false;
    }
    if(number.length!==10){
        phoneError.innerHTML="10 digits required";
        return false;
    }
    if(!number.match(/^[0-9]{10}$/)){
        phoneError.innerHTML="Enter valid phone number";
        return false
    }
    phoneError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    let email = document.getElementById("contact-email").value;
    if(email.length==0){
        emailError.innerHTML="Enter Email";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][A-Za-z]{2,3}$/)){
        emailError.innerHTML="Enter valid email";
        return false
    }
    emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    let count = 30;
    let message = document.getElementById("contact-message").value;
    let required = count - message.length;
    if(required>0){
        messageError.innerHTML=required+"characters needed";
        return false;
    }
    messageError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(!validateName()||!validateNumber()||!validateEmail()||!validateMessage()){
        submitError.style.display="block";
        submitError.innerHTML="Please fix error to submit";
        setTimeout(()=>{submitError.style.display="none";},3000);
        return false
    }
}