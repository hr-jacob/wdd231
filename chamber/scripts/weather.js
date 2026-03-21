const apiKey = "2ffffd2d943f1b272cace4b35a33bf52";

// Mérida coordinates
const lat = 20.9674;
const lon = -89.5926;

const currentURL =
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

const forecastURL =
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;


// ---------- CURRENT WEATHER ----------
async function getWeather() {
  try {
    const response = await fetch(currentURL);

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const data = await response.json();
    console.log("Current weather:", data); // DEBUG

    document.querySelector("#current-temp").textContent =
      `${Math.round(data.main.temp)} °F`;

    document.querySelector("#weather-desc").textContent =
      data.weather[0].description;

  } catch (error) {
    console.error("Weather error:", error);
  }
}


// ---------- FORECAST ----------
async function getForecast() {
  try {
    const response = await fetch(forecastURL);

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const data = await response.json();
    console.log("Forecast:", data); // DEBUG

    const forecastDiv = document.querySelector("#forecast");
    forecastDiv.innerHTML = "";

    const days = data.list
      .filter((item, index) => index % 8 === 0)
      .slice(1, 4);

    days.forEach(day => {
      const date = new Date(day.dt_txt);

      const p = document.createElement("p");
      p.textContent =
        `${date.toLocaleDateString("en-US", { weekday: "short" })}: ${Math.round(day.main.temp)}°F`;

      forecastDiv.appendChild(p);
    });

  } catch (error) {
    console.error("Forecast error:", error);
  }
}

getWeather();
getForecast();