function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
const body = document.querySelector('body');

btn.addEventListener('click', onClick);

function onClick() {
  colorSpan.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
}