const textEl = document.querySelector('#text');
const inputEl = document.querySelector('#font-size-control');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    textEl.style.fontSize = `${event.currentTarget.value}px`;
}