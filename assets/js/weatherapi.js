$(document).ready(function () {
  function fetchWeatherData(city) {
    API_URL = `https://api.weatherapi.com/v1/current.json?key=c5eb9bcba2324e27b0c45812230202&q=${city}&aqi=yes`;
    $.getJSON(API_URL, function (data) {
      //console.log(data);
      // access the data properties you need here
      let location = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
      let condition = data.current.condition.text;
      let icon = data.current.condition.icon;
      let temperature = data.current.temp_c;
      let precipitation = data.current.precip_mm;
      let windSpeed = data.current.wind_kph;
      let humidity = data.current.humidity;

      $("#location")
        .css({
          transition: "all 0.5s ease-in-out",
        })
        .text(`${location}`);
      $("#weather-condition")
        .css({
          transition: "all 0.5s ease-in-out",
        })
        .text(condition);
      $("#icon").attr("src", icon);
      $("#temperature")
        .css({
          transition: "all 0.5s ease-in-out",
        })
        .text(`${temperature}℃`);
      $("#humidity")
        .css({
          transition: "all 0.5s ease-in-out",
        })
        .text(`${humidity}%`);
      $("#precipitation")
        .css({
          transition: "all 0.5s ease-in-out",
        })
        .text(`${precipitation} mm`);
      $("#wind-speed")
        .css({
          transition: "all 0.5s ease-in-out",
        })
        .text(`${windSpeed} km/h`);
    });
  }

  let city;

  $("#search-btn").click(function (event) {
    event.preventDefault();
    city = $("#city").val();
    fetchWeatherData(city);
  });
  $(document).on("keydown", (event) => {
    if (event.key === "Enter") {
      city = $("#city").val();
      fetchWeatherData(city);
    }
  });
});
