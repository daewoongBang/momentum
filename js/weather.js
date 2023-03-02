const onGeoSuccess = position => {
  const { latitude, longitude } = position.coords;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${OPEN_WEATHER_API_KEY}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');

      weather.innerHTML = `${data.weather[0].main} ${data.main.temp}°`;
      city.innerHTML = data.name;
    })
    .catch(error => {
      console.log(error);
    });
};

const onGeoError = () => {
  alert(`Can't find you. No weather for you.`);
};

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
