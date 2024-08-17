const inputField = document.getElementById("password");
const copy = document.getElementById("copy");
const generateButton = document.querySelector("button");

generateButton.addEventListener("click",()=>{
    generatePassword();
});

function generatePassword(){
    resetInput();
    let password = getPassword(12);
    inputField.value = password;
}

function resetInput(){
    inputField.value="";
}

function getPassword(length){
    const getRandomChar = ()=>{
        const charSets = [
            [48, 57],  
            [65, 90],  
            [97, 122], 
            [33, 47],
            [91, 96],
        ];
    const charSet = charSets[Math.floor(Math.random()*charSets.length)];
    const charCode = Math.floor(Math.random()*(charSet[1]-charSet[0]+1))+charSet[0];
    return String.fromCharCode(charCode);
    };
    let password = "";
    for(let i=0;i<length;i++){
        password += getRandomChar();
    }
    return password;
}
function copyPassword(){
    inputField.select();
    let value = inputField.value;
    navigator.clipboard.writeText(value);
}
