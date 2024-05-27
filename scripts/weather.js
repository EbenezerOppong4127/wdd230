const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const weatherIcon = document.getElementById('weather-icon');

const apiKey = '694abba7310ecc34f4bc3493b430a458'; // Replace with your OpenWeatherMap API key
const lat = 5.345317; // Latitude for Abidjan
const lon = -4.024429; // Longitude for Abidjan

async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Fetch Error:', error);
        displayError(error);
    }
}

function displayWeather(data) {
    temperature.textContent = `${data.main.temp}°C`;
    description.textContent = data.weather[0].description;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.alt = data.weather[0].description;

    console.log('Temperature:', data.main.temp, '°C');
    console.log('Description:', data.weather[0].description);
    console.log('Weather Icon URL:', weatherIcon.src);
}

function displayError(error) {
    temperature.textContent = 'Temperature: N/A';
    description.textContent = 'Could not retrieve weather data';
    weatherIcon.src = '';
    weatherIcon.alt = 'No weather icon available';

    console.error('Fetch Error:', error);
}

fetchWeather();
