//Initialize Express App
//Write code here
const PORT = process.env.PORT || 3000;

//Set Up Middleware
//Write Code here

// Serve the HTML file
app.get('/', (req, res) => {
    //Create an endpoint to serve the HTML file
});

// Handle user input and fetch weather data
app.post('/getWeather', async (req, res) => {
    const country = req.body.country;
    const city = req.body.city;

    try {
        //Use Axios to make a GET request to the weather API with the provided parameters.
        const weatherData = response.data;
        //Send the weather data in the response. 
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching weather data. Please try again later.');
    }
});

// Server endpoint to get cities based on country
app.get('/getCities', async (req, res) => {
    const country = req.query.country;
    try { 
        //Use Axios to make a GET request to the weather API's search endpoint. 
        //Extract and send the list of cities in the response. 
    }
    catch (error) { 
    console.error(error); 
     res.status(500).send('Error fetching cities data. Please try again later.'); 
 }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
