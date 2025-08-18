

function showweatherDetails(event){
    event.preventDefault();
    const city = document.getElementById("city").value;
    const apiKey = "e38c08bf253cf6764586d67fe86adc60";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(apiUrl).then((response) => response.json()).then((data) => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
    }).catch((error) => console.error("Error fetching weather:" , error))

}

document.getElementById("weatherForm").addEventListener("submit" , showweatherDetails);