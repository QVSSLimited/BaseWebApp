$(document).ready(function(){
  getWeather();
})

function getWeather(searchQuery) {
   var url = "https://api.openweathermap.org/data/2.5/weather?q="+qsearchQuery+"&units=imperial&APPID="+apiKey;

$.ajax(url,{success: function(data){
  $(".city").text(data.name);
  $(".temp").text(data.main.temp);
}})
}

function searchWeather() {
  var searchQuery = $(",search").val();
  getWeather(searchQuery); 
}

