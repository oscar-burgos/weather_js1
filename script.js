// Button
document.getElementById('submit-button').addEventListener('click', function(event) {
  event.preventDefault();

// Ajax
$(document).ready(function($) {

	$.ajax({
		method: "GET",
		url: 'http://api.openweathermap.org/data/2.5/weather?q=' + $('#location').val() + "&appid=bc0f4167e31574b40f700fb02b9935f0"
	})

	.done(function(data){
		console.log(data);
    weatherInfo.append(data.name);
    weatherInfo.append(data.main.temp);
    weatherInfo.append(data.weather[0].description);
    weatherInfo.append(data.wind.speed);
	})
 .fail(function() {

 	console.log("error");

});




// Get user input


var weatherInfo = $('#weather-info');



});



});
