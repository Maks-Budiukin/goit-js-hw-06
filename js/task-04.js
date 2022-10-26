const incrBtnEl = document.querySelector('[data-action="increment"]');
const decrBtnEl = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');

incrBtnEl.addEventListener('click', () => onIncrBtnClick());
decrBtnEl.addEventListener('click', () => onDecrBtnClick());

let counterValue = 0;

function onIncrBtnClick () {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

function onDecrBtnClick () {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};
