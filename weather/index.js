 async function getWeather(){
    const city = document.getElementById('city').value;
    const apiKey = '7c090b735cacb8eed3c8333938364ad6';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=faisalabad&appid=7c090b735cacb8eed3c8333938364ad6`;
    
try {
    const response = await fetch(url);
    if(!response.ok){
        throw new Error('City not found');
    }
    const data = await response.json();
    displayWeather(data);
} catch(error){
    document.getElementById('weather').innerHTML = 'Error : ' + error.message;
}
 }

function displayWeather(data){
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = `<h2> ${data.name} , ${data.sys.country}</h2>
    <p> Temperature: ${data.main.temp} C </p>
    <p> Weather : ${data.weather[0].description} </p>
    <p> Humidityn: ${data.main.humidity} % </p>
    <p> Wind Speed : ${data.wind.speed} m/s </p>`;
}