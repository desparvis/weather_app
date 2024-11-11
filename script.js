// Getting data from the form
document.getElementById("weatherForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const city = document.getElementById("cityInput").value;
    getWeather(city);
});

// The function that gets the weather information from API and converts the data into json
async function getWeather(city) {
    const apiKey = "185d7258e5d1b0f6dffa835d5efddfd0";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const request = await fetch(url);
        if (!request.ok) {
            throw new Error(`Error : ${request.status}. City is not available`);
        }
        const data = await request.json();
        displayWeather(data);
        if(data.cod ==="404") {
            throw new Error(`City ${city} is not found`);
        }
    } catch (error) {
        document.getElementById("weatherRes").innerHTML = `<p>${error.message}</p>`
    }
}

// The function that displays the weather information in the weatherRes HTML DIV
function displayWeather(data) {
    const result = document.getElementById("weatherRes");
    const celsius = data.main.temp;
    const fahrenheit = (celsius * 9 / 5) + 32;
    const cfix = celsius.toFixed(2);
    const ffix = fahrenheit.toFixed(2); 
    result.innerHTML = `
    <h2>For ${data.name}</h2>
    <p>Temperature: ${cfix} Celsius & ${ffix} Fahrenheit</p>
    <p>Weather: ${data.weather[0].description}</p>`;
}