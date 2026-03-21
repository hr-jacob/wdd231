const apiKey = "Ya6bfab2eb1f1a0ffa2e66a5bd3265f9b";

// Mérida, Yucatán
const lat = 20.9674;
const lon = -89.5926;

// CURRENT WEATHER
const currentURL =
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

// FORECAST
const forecastURL =
  `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(currentURL);
    const data = await response.json();

    document.querySelector("#current-temp").textContent =
      `${data.main.temp.toFixed(0)} °F`;

    document.querySelector("#weather-desc").textContent =
      data.weather[0].description;

  } catch (error) {
    console.error("Weather error:", error);
  }
}

async function getForecast() {
  try {
    const response = await fetch(forecastURL);
    const data = await response.json();

    const forecastDiv = document.querySelector("#forecast");
    forecastDiv.innerHTML = "";

    // every 8 items ≈ 24 hours (3-hour intervals)
    const days = data.list.filter((item, index) => index % 8 === 0).slice(1,4);

    days.forEach(day => {
      const date = new Date(day.dt_txt);

      const card = document.createElement("p");
      card.textContent =
        `${date.toLocaleDateString("en-US", { weekday: "short" })}: ${day.main.temp.toFixed(0)}°F`;

      forecastDiv.appendChild(card);
    });

  } catch (error) {
    console.error("Forecast error:", error);
  }
}

getWeather();
getForecast();