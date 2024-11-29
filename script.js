//Load environment variables from .env file
require('dotenv').config(); 
// Getting data from the form
document.getElementById("weatherForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting in the default way
    const city = document.getElementById("cityInput").value; // Get the city name from the input field
    getWeather(city); // Call the function to fetch weather data for the given city
});

// The function that gets the weather information from API and converts the data into JSON
async function getWeather(city) {
    const apiKey = process.env.API_KEY; // API key for OpenWeatherMap from env file
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // URL to fetch weather data

    try {
        const request = await fetch(url); // Send a request to the API
        if (!request.ok) { // Check if the response is not OK
            throw new Error(`HTTP error! Status: ${request.status}`); // Throw an error if the response is not OK
        }
        const data = await request.json(); // Convert the response to JSON
        if (data.cod === "404") { // Check if the city is not found
            throw new Error(`City ${city} is not found`); // Throw an error if the city is not found
        }
        displayWeather(data); // Call the function to display the weather data
    } catch (error) {
        document.getElementById("weatherRes").innerHTML = `<p>${error.message}</p>`; // Display the error message
    }
}

// The function that displays the weather information in the weatherRes HTML DIV
function displayWeather(data) {
    const result = document.getElementById("weatherRes"); // Get the weatherRes element
    const celsius = data.main.temp; // Get the temperature in Celsius
    const fahrenheit = (celsius * 9 / 5) + 32; // Convert the temperature to Fahrenheit
    const cfix = celsius.toFixed(2); // Format the Celsius temperature to 2 decimal places
    const ffix = fahrenheit.toFixed(2); // Format the Fahrenheit temperature to 2 decimal places
    result.innerHTML = `
    <h2>For ${data.name}</h2>
    <p>Temperature:<strong> ${cfix} °C</strong> | <strong>${ffix} °F</strong></p>
    <p>Weather: <p style="text-transform: uppercase; font-weight: bold">${data.weather[0].description}</p></p>`; // Display the weather information
}
