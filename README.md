# Weather App
Overview:

This Weather app gives you real-time weather information of city, depending on input
gives you the information in a user-friendly format.

# Features:

User can enter city name and submit.
Displays temperature in both Celsius and Fahrenheit.
Provides a short weather description.
Responsive for different screen sizes.

# Technologies used:

HTML
CSS
JavaScript
OpenWeatherMAP API

# How to use:

Just clone the repository and go into the directory and open "index.html" with a browser
that supports HTML5.

# File Structure:

weather_app/ index.html styles.css script.js

# Detailed Explanation

HTML: This was used to give the webpage structure including the form for entering a city name
and submitting it and also the area to display the weather information.

CSS: This was used to make the webpage visually appealing and responsive for different screen sizes.

JavaScript: This was used to make the logic behind fetching data from the OpenWeatherMAP API and 
displaying it on the webpage. It also contains functions that handle form submissions, updating the
DOM with weather information and also fetching data.

# Installation and setup

1. Get an API key from OpenWeatherMAP API: Visit the website and signup, the key is free.
2. Add your key to script.js: Put the key into the variable apiKey.
3. Run the app: Use the browser to run index.html.

# Deployment

1. I installed nginx on both of my web servers: web-01 and web-02.
2. Both of these service were configured on their respective dns "web-01.credodesparvis.tech" and "web-02.credodesparvis.tech"
3. I had to make files index.html styles.css script in localhost directories of both servers which is "/var/www/html/"
4. I had to copy the codes from my local computer files to the files on the webservers.
5. I restarted nginx on both server to make sure the changes made happen.
6. I didn't configure anything from the nginx config files on both web servers to haproxy on the load balancer which was "lb-01"
because they were already configured.
7. My load balancer also had an HTTPS certificate so, I didn't need to configure that.
8. I ran the app on the domain name "www.credodesparvis.tech" and the app was running smoothly.

# Pushed and not pushed files

I only pushed files that help the projects like index.html, styles.css, script.js and my package.json and package-lock.json that
help the project but my .env file contains my API KEY so, I didn't push it. But I also pushed my .gitignore and this README.md of course.

# Acknowledgements

This application fetches data from OpenWeatherMAP API.