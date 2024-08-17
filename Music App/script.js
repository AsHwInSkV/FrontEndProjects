const slider = document.querySelector(".slider");
const playbtn = document.getElementById("ctrlIcon");
let song = document.getElementById("song");
playbtn.addEventListener("click",playPause);

song.onloadedmetadata=()=>{
    slider.max=song.duration;
    slider.value=song.currentTime;
}

function playPause(){
    if(playbtn.classList.contains("fa-pause")){
        song.pause();
        playbtn.classList.remove("fa-pause");
        playbtn.classList.add("fa-play");
    }
    else{
        song.play();
        playbtn.classList.remove("fa-play");
        playbtn.classList.add("fa-pause");
    }
}
if(song.play()){
    setInterval(()=>{
        slider.value=song.currentTime;
    },500);
}

slider.onchange=()=>{
    song.play();
    song.currentTime=slider.value;
    playbtn.classList.remove("fa-play");
    playbtn.classList.add("fa-pause");

};

