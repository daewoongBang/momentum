const images = ['0.jpg', '1.jpg', '2.jpg'];

const todayBackgroundImage = images[Math.floor(Math.random() * images.length)];

const bodyElement = document.querySelector('body');

bodyElement.style.backgroundImage = `url('images/background/${todayBackgroundImage}')`;

bodyElement.style.backgroundRepeat = 'no-repeat';

bodyElement.style.backgroundSize = 'cover';
