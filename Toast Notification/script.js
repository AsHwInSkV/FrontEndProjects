const msgArea = document.querySelector(".toastbox");
let successMessage = "Successfully Submitted";
let errorMessage = "Please fix the error";
let InvalidMessage = "Invalid input try again!"
function showToast(msg){
    let toast = document.createElement("div");
    toast.innerHTML = msg;
    toast.classList.add("toast");
    msgArea.appendChild(toast)
    if(msg.includes("error")){
        toast.classList.add("error")
    }
    if(msg.includes("Invalid")){
        toast.classList.add("invalid");
    }
    setTimeout(() => {
        toast.remove();
    }, 6100);
}
