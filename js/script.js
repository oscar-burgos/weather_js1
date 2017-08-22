
// declare variables
var weatherInfo = $('#weather-info'),
		body = document.body,
		// Create HTML elements and add id's
		ul = document.createElement('ul'),
		city = document.createElement('li');
			city.setAttribute('id', 'city'),
		temp = document.createElement('li'),
			temp.setAttribute('id', 'temp'),
		description = document.createElement('li'),
			description.setAttribute('id', 'description'),
		wind = document.createElement('li'),
			wind.setAttribute('id', 'wind');

// Append li's to ul and ul to weatherInfo div
ul.append(city, temp, description, wind);
weatherInfo.append(ul);

var myKey = config.WEATHER_KEY;

// Event Listener
document.getElementById('submit-button').addEventListener('click', function(event) {
  event.preventDefault();

// Ajax call
$(document).ready(function($) {
	// Replace city in url with user input
	$.ajax({
		method: "GET",
		url: 'https://api.openweathermap.org/data/2.5/weather?q=' + $('#location').val() + "&appid=" + myKey
	})

	// Append data to li's in HTML
	.done(function(data){
		var degree = (Math.round((data.main.temp-273.15)*1.8+32));
		// Data for city name
		document.getElementById('city').innerHTML='';
    city.append(data.name);
		// Data for temperature
		document.getElementById('temp').innerHTML='';
    temp.append(degree + String.fromCharCode(176)); // Convert from Kelvin to Fahrenheit
		// Data for description
		document.getElementById('description').innerHTML='';
    description.append(data.weather[0].description);
		// Data for wind speed
		document.getElementById('wind').innerHTML='';
    wind.append('Wind: ' + data.wind.speed + '/mph');

		// Background Color Selector
		if (degree >= 106) {
    	document.body.style.backgroundImage = "-webkit-linear-gradient(top, #d02020, #ff5d39, #fe9400)";
		} else if (degree >=91 && degree <= 105) {
			document.body.style.backgroundImage = "-webkit-linear-gradient(top, #ff5d39, #fe9400)";
		} else if (degree >=76 && degree <= 90) {
			document.body.style.backgroundImage = "-webkit-linear-gradient(top, #fe9400, #f7e86b)";
		} else if (degree >=61 && degree <= 75) {
			document.body.style.backgroundImage = "-webkit-linear-gradient(top, #f7e86b, #3eecd1)";
		} else if (degree >=46 && degree <= 60) {
			document.body.style.backgroundImage = "-webkit-linear-gradient(top, #3eecd1, #0095f9)";
		} else if (degree >=33 && degree <= 45) {
			document.body.style.backgroundImage = "-webkit-linear-gradient(top, #0095f9, #9aebf9)";
		} else {
			document.body.style.backgroundImage = "-webkit-linear-gradient(top, #9aebf9, #dff4f4)";
		}
	// Alert message if city is entered wrong
	})
 .fail(function() {

 	alert("The city you entered does not seem to exist");

	});
document.getElementById('my-form').reset();
});

});
