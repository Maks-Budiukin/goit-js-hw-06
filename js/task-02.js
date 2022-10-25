const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');
const ingredientsToAdd = [];
ingredients.map((item, idx) => {
  
  item = document.createElement('li');
  
  item.textContent = `${ingredients[idx]}`;
  item.classList.add('item');
  ingredientsToAdd.push(item);
});

listEl.append(...ingredientsToAdd);