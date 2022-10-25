const categoriesList = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesList.length}`);
console.log("");

for (let category of categoriesList) {
    
    console.log(`Category: ${category.querySelector('h2').textContent}`);
    console.log(`Elements: ${category.querySelectorAll('li').length}`);
    console.log("");
}