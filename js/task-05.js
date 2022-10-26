/////////////// через if ///////////////

// const inputEl = document.querySelector('#name-input');
// const outputEl = document.querySelector('#name-output');

// inputEl.addEventListener('input', onInputChange);

// function onInputChange(event) {
    
//     if (event.currentTarget.value !== "") {
//         outputEl.textContent = event.currentTarget.value;
//     } else {
//         outputEl.textContent = "Anonymous";
//     }
// }

////////////// через тернарный оператор //////////////


const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    
    event.currentTarget.value === ""
        ? outputEl.textContent = "Anonymous"
        : outputEl.textContent = event.currentTarget.value;
    
}


