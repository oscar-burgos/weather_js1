
// declare variables
var weatherInfo = $('#weather-info'),
		body = document.body,
		// Create HTML elements and add classes
		ul = document.createElement('ul'),
		city = document.createElement('li');
			city.setAttribute('class', 'city'),
		temp = document.createElement('li'),
			temp.setAttribute('class', 'temp'),
		description = document.createElement('li'),
			description.setAttribute('class', 'description'),
		wind = document.createElement('li'),
			wind.setAttribute('class', 'wind');

// Append li's to ul and ul to weatherInfo div
ul.append(city, temp, description, wind);
weatherInfo.append(ul);

console.log(ul);

// Button click
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
		console.log(data);
    city.append(data.name);
    temp.append(Math.round((data.main.temp-273.15)*1.8+32) + String.fromCharCode(176)); // Convert from Kelvin to Fahrenheit
    description.append(data.weather[0].description);
    wind.append('Wind: ' + data.wind.speed + '/mph');
		
	})
 .fail(function() {

 	alert("The city you entered does not seem to exist");

	});

});

});
