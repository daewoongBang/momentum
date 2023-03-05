const clock = document.querySelector('#clock');

const getClock = () => {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clock.innerHTML = `${setNumberFormat(hours)}:${setNumberFormat(minutes)}`;
};

getClock();

setInterval(getClock, 1000);
