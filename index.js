const apiKey = "daac599b1097634ab2b02f724ebc3a25";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");



async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if (data.weather[0].main == "Clouds") {
        document.querySelector(".weather-icon").src = "C:\Users\SWATI\Desktop\projects\Javascript\images\images\clouds.png"
    }

}



searchbtn.addEventListener("click", () => {
    checkweather(searchBox.value);
})