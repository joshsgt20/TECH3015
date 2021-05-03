const WeatherIcons = document.querySelector(".WeatherIcon");
const Temperature = document.querySelector(".TempValue p");
const TempDescription = document.querySelector(".TempDisplay p");
const Location = document.querySelector(".location p");
const Unsupported = document.querySelector(".Unsupported");
const weather = {};

weather.temperature = {
    unit : "celsius"
}
const KELVIN = 273;
// API KEY
const key = "3c6165e9323c0b5df156bd6d5a29496c";


if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    Unsupported.style.display = "block";
    Unsupported.innerHTML = "<p>Sorry, your browser does not support our weather app.</p>";
}

function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
}


function showError(error){
    Unsupported.style.display = "block";
    Unsupported.innerHTML = `<p> ${error.message} </p>`;
}


function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
}


function displayWeather(){
    WeatherIcons.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    Temperature.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    TempDescription.innerHTML = weather.description;
    Location.innerHTML = `${weather.city}, ${weather.country}`;
}


function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

Temperature.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;
    
    if(weather.temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
        
        Temperature.innerHTML = `${fahrenheit}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    }else{
        Temperature.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit = "celsius"
    }
});



























