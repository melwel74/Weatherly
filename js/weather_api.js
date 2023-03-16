const apiKey = '82970e09d0eacb82bc4e58418e149094'; // Replace with your API key
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const units = 'imperial'; // Use 'imperial' for Fahrenheit

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const cityName = searchInput.value.trim();
    if (!cityName) return;

    const completeUrl = `${baseUrl}q=${cityName}&appid=${apiKey}&units=${units}`;

    fetch(completeUrl)
        .then(response => response.json())
        // ...
.then(data => {
    if (data.cod !== '404') {
        const city = data.name || 'N/A';
        const temperature = data.main && data.main.temp || 'N/A';
        const weatherDescription = data.weather && data.weather[0] && data.weather[0].description || 'N/A';
        const humidity = data.main && data.main.humidity || 'N/A';
        const windSpeed = data.wind && data.wind.speed || 'N/A';

        document.getElementById('city-name').textContent = city;
        document.getElementById('temperature').textContent = temperature;
        document.getElementById('weather-description').textContent = weatherDescription;
        document.getElementById('humidity').textContent = humidity;
        document.getElementById('wind-speed').textContent = windSpeed;
    } else {
        console.error('City not found!');
    }
})
// ...

});
