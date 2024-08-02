 async function getWeather(){
    const city = document.getElementById('city').value;
    if(!city){
        alert('Please enter a city name');
        return;
    }
    const apiKey = '7c090b735cacb8eed3c8333938364ad6';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=faisalabad&appid=7c090b735cacb8eed3c8333938364ad6`;

    showLoading(true);
    
try {
    const response = await fetch(url);
    if(!response.ok){
        throw new Error('City not found');
    }
    const data = await response.json();
    displayWeather(data);
} catch(error){
    document.getElementById('weather').innerHTML = 'Error : ' + error.message;
} finally {
    showLoading(false);
}
 }

function displayWeather(data){
    const weatherDiv = document.getElementById('weather');
    const temperatureCelsius= (data.main.temp-273.15).toFixed(0);
    weatherDiv.innerHTML = `<h2> ${data.name} , ${data.sys.country}</h2>
    
    <p> Temperature: ${temperatureCelsius} Degree </p>
    <p> Weather : ${data.weather[0].description} </p>
    <p> Humidityn: ${data.main.humidity} % </p>
    <p> Wind Speed : ${data.wind.speed} m/s </p>
    <p> Pressure: ${data.main.pressure} hpa </p>
    <p> Visibility: ${data.visibility} meters </p>`;
}

function showLoading(isLoading){
    const loadingDiv = document.getElementById('loading');
    loadingDiv.classList.toggle('hidden', !isLoading);
}

function getCurrentLocationWeather(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(async position =>{
            const apiKey = '7c090b735cacb8eed3c8333938364ad6';
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude} &lon=
            ${longitude}&appid=${'7c090b735cacb8eed3c8333938364ad6'}&units=metric`;

            showLoading(true);
            try {
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error('Unable to retrive weather data for current location');
                    }
                    const data = await response.json();
                    displayWeather(data);
                    } catch(error){
                        document.getElementById('weather').innerHTML = 'Error : ' + error.message;
                        } finally {
                            showLoading(false);
            }
        });
    } else{
        alert('Geolocation is not supported by this browser.');
    }
}