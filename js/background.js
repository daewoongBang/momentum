const images = ['0.jpg', '1.jpg', '2.jpg'];

const todayBackgroundImage = images[Math.floor(Math.random() * images.length)];

const backgroundImage = document.createElement('img');

backgroundImage.src = `images/background/${todayBackgroundImage}`;

document.body.appendChild(backgroundImage);
