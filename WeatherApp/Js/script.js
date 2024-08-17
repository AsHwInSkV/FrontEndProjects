const apiKey = "5f4d03ed6309ffa12d065d6e34397beb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data = await response.json();
    }
    

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.scr="../Resources/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.scr="../Resources/clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.scr="../Resources/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.scr="../Resources/Mist.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.scr="../Resources/Rain.png";
    }
    document.querySelector(".error").style.display="none";
    document.querySelector(".weather").style.display="block";


}
searchButton.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})