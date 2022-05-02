const getMeTheWeather = function () {
    let city = document.querySelector('input#city').value;
 
 fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=9b76a47a29c8dd99c9cf9b0c7f6d78df&units=metric')
  .then(response => response.json())
  .then(data => printInformation(data));
 }

 const printInformation = function(data){
    let weatherInfo = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png"> ${data.main.temp}`;
    document.querySelector('div#weatherData').innerHTML = weatherInfo;
}