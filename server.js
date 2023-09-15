const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Handle user input and fetch weather data
app.post('/getWeather', async (req, res) => {
    const country = req.body.country;
    const city = req.body.city;

    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=b3f1af48cd01480b8b194811231309&q=${city},${country}&aqi=no`);
        const weatherData = response.data;

        res.send(weatherData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching weather data. Please try again later.');
    }
});

// Server endpoint to get cities based on country
app.get('/getCities', async (req, res) => {
    const country = req.query.country;

    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/search.json?key=b3f1af48cd01480b8b194811231309&q=${country}`);
        const cities = response.data.map(result => result.name);

        res.send(cities);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching cities data. Please try again later.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
