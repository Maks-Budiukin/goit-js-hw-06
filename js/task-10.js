function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

const boxesEl = document.querySelector('#boxes');

createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);

let divWidth = 20;
let divHeight = 20;



function onCreateBtnClick() {

  for (let i = 0; i < inputEl.value; i += 1) {
  
  const div = document.createElement('div');
    
  div.style.width = `${divWidth += 10}px`;
  div.style.height = `${divHeight += 10}px`;
  div.style.backgroundColor = getRandomHexColor();
    
  boxesEl.append(div);
}
  
}

function onDestroyBtnClick() {
  boxesEl.innerHTML = '';
}







