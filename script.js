
var getWeather= function(){

var city=$('#city')[0].value;
var state=$('#state')[0].value;
var url="https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+ city +"%2C%20"+state+"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";


$.getJSON(url,
function(json) {
  var current= json.query.results.channel.item;

  $('#result').html("<h3>Currently</h3>"+"<div id='temp'>"+current.condition.temp+"&deg;F</div><div id='today'>"+current.condition.date+"<p>Conditions are: "+current.condition.text+"</p></div>"+"<h3>Five Day Forecast</h3>")
    for(var i=0; i<5; i++){
      JSON.stringify(current.forecast[i]);
      $('#result').append("<div id='forecastday'>" + current.forecast[i].day +", "+current.forecast[i].date +"</div>");
      $('#result').append("<div id='forecast'>" + "<p>High: "+current.forecast[i].high +"&deg;F; Low: "+current.forecast[i].low +"&deg;F; "+"Conditions: "+current.forecast[i].text+ "</p></div>");

    }
  })
  return false;
}
