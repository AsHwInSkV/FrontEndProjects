let speech = new SpeechSynthesisUtterance();
let voiceSelect = document.querySelector("select");
const inputTextArea = document.getElementById("Textarea");
const listenBtn = document.getElementById("button");
let voices =[];

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice=voices[0];
    voices.forEach((voice,i)=>(
        voiceSelect.options[i] = new Option(voice.name,i)
    ));
};

voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value]
});

listenBtn.addEventListener("click",()=>{
    speech.text=inputTextArea.value;
    window.speechSynthesis.speak(speech);
});
