const errorMsg = document.querySelector(".error-msg");
const scriptURL = 'https://script.google.com/macros/s/AKfycbxDuJQyYWaq1U8FjfwtkaBO348SM3faL1bqfFwFuhKZKAl5cOEloIRfjwW95aiaEO6lUA/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        errorMsg.innerHTML="Thank You For Suscribing!";
        setTimeout(()=>{
            errorMsg.innerHTML="";
        },3000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
