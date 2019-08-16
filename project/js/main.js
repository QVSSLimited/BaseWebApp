$(document).ready(function(){
  getWeather();
})

function getWeather() {
   var url = "https://api.openweathermap.org/data/2.5/weather?q=Boston&APPID="+apiKey;

$.ajax(url,{success: function(data){
  $(".city").text(data.name);
  $(".temp").text(data.temp);

}})
}