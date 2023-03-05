const onGeoSuccess = position => {
  const { latitude, longitude } = position.coords;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${OPEN_WEATHER_API_KEY}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      const img = document.createElement('img');
      img.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      img.alt = data.weather[0].main;

      const divEl = document.createElement('div');

      const temperatureEl = document.createElement('span');
      temperatureEl.innerText = `${data.main.temp}°`;

      const conditionDescriptionEl = document.createElement('span');
      conditionDescriptionEl.innerText = data.weather[0].main;

      divEl.appendChild(conditionDescriptionEl);
      divEl.appendChild(temperatureEl);

      weather.prepend(img);
      weather.appendChild(divEl);
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
