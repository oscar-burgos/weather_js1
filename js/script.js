
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
		console.log(myKey);

// Event Listener
document.getElementById('submit-button').addEventListener('click', function(event) {
  event.preventDefault();

// Ajax call
$(document).ready(function($) {
	// Replace city in url with user input
	$.ajax({
		method: "GET",
		url: 'http://api.openweathermap.org/data/2.5/weather?q=' + $('#location').val() + "&appid=bc0f4167e31574b40f700fb02b9935f0"
	})

	// Append data to li's in HTML
	.done(function(data){
		// Data for city name
		document.getElementById('city').innerHTML='';
    city.append(data.name);
		// Data for temperature
		document.getElementById('temp').innerHTML='';
    temp.append(Math.round((data.main.temp-273.15)*1.8+32) + String.fromCharCode(176)); // Convert from Kelvin to Fahrenheit
		// Data for description
		document.getElementById('description').innerHTML='';
    description.append(data.weather[0].description);
		// Data for wind speed
		document.getElementById('wind').innerHTML='';
    wind.append('Wind: ' + data.wind.speed + '/mph');

		// Background colors
		if (Math.round((data.main.temp-273.15)*1.8+32 >= 80)){
			document.body.style.backgroundImage = "url('img/red.jpg')"; // red background
		} else if (Math.round((data.main.temp-273.15)*1.8+32 < 80)) {
			document.body.style.backgroundImage = "url('img/light-blue.jpg')"; // light blue background
		}
	// Alert message if city is entered wrong
	})
 .fail(function() {

 	alert("The city you entered does not seem to exist");

	});
document.getElementById('my-form').reset();
});

});
