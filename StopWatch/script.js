const timeArea = document.getElementById("time");
const startbtn = document.getElementById("start");
const stopbtn = document.getElementById("stop");
const resetbtn = document.getElementById("reset");

startbtn.addEventListener("click",watchStart);
stopbtn.addEventListener("click",watchStop);
resetbtn.addEventListener("click",watchReset);

let [hours,seconds,minutes]=[0,0,0]
let timer = null;
function stopwatch(){
    seconds++
    if(seconds==60){
        seconds=0
        minutes++
        if(minutes==60){
            minutes=0
            hours++
        }
    }
    let h = hours<10 ? "0"+hours : hours;
    let s = seconds<10 ? "0"+seconds :seconds;
    let m = minutes<10 ? "0"+minutes : minutes;

    timeArea.innerHTML=h+":"+m+":"+s;
}

function watchStart(){
    if(startbtn.classList.contains("fa-play")){
        startbtn.classList.remove("fa-play");
        startbtn.classList.add("fa-pause");
        timer = setInterval(stopwatch,1000);
    }
    else if(startbtn.classList.contains("fa-pause")){
        clearInterval(timer);
        startbtn.classList.remove("fa-pause");
        startbtn.classList.add("fa-play");
    }
    // if(timer!==null){
    //     clearInterval(timer);
    // }
    // timer = setInterval(stopwatch,1000);
}
function watchStop(){
    clearInterval(timer);
}
function watchReset(){
    clearInterval(timer);
    [hours,seconds,minutes]=[0,0,0]
    timeArea.innerHTML="00:00:00"
}
