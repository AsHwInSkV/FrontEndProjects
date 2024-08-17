let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let date = new Date("Oct 16, 2025 05:05:00").getTime();
let x = setInterval(()=>{
    let currDate = new Date().getTime();
    let distance = date-currDate;
    let day = Math.floor(distance/((1000 * 60 * 60 * 24)));
    let hour = Math.floor((distance%(1000 * 60 * 60 * 24))/(1000 * 60 * 60 ));
    let minute = Math.floor((distance%(1000 * 60 * 60 ))/(1000 * 60));
    let second = Math.floor((distance%(1000 * 60 ))/1000);

    days.innerHTML=day;
    hours.innerHTML= hour;
    minutes.innerHTML=minute;
    seconds.innerHTML=second;

    if(distance<0){
        clearInterval(x);
        days.innerHTML="00";
        hours.innerHTML= "00";
        minutes.innerHTML="00";
        seconds.innerHTML="00";
    }
},1000);