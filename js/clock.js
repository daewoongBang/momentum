const clock = document.querySelector('#clock');

const setClockNumberFormat = number => {
  return number.toString().padStart(2, '0');
};

const getClock = () => {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clock.innerHTML = `
  ${setClockNumberFormat(hours)} 
  : ${setClockNumberFormat(minutes)} 
  : ${setClockNumberFormat(seconds)}`;
};

getClock();

setInterval(getClock, 1000);
