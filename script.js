const API_KEY = "9e8bfd8dff87bab65765f518165e4d52";
const urlBase = `https://api.openweathermap.org/data/2.5/weather`;
const diffKelvin = 273.15;

document.getElementById("searchButton").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  if (city) {
    //llamar a la API para nos de la información del clima
    fetchWeather(city);
  } else {
    alert("Ingresa una ciudad válida");
  }
});

//?q={city name}&appid=${apiKeyWheaterMap}

function fetchWeather(city) {
  fetch(`${urlBase}?q=${city}&appid=${API_KEY}&units=metric&lang=es`)
    .then((data) => data.json())
    .then((data) => showWeatherData(data))
    .catch((error) => console.log(error));
}

function showWeatherData(data) {
  const divRespondeData = document.getElementById("responseData");
  divRespondeData.innerHTML = "";

  const cityName = data.name;
  const countryName = data.sys.country;
  const temperature = data.main.temp;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;

  const cityInfo = document.createElement("h2");
  cityInfo.textContent = `${cityName}, ${countryName}`;
  divRespondeData.appendChild(cityInfo);

  const tempInfo = document.createElement("p");
  tempInfo.textContent = `Temperatura: ${Math.floor(temperature)}°C`;
  divRespondeData.appendChild(tempInfo);


  const humidityInfo = document.createElement("p");
  humidityInfo.textContent = `Humedad: ${humidity}%`;
  divRespondeData.appendChild(humidityInfo);

  const iconInfo = document.createElement("img");
  iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  divRespondeData.appendChild(iconInfo);
}
