function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b ;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

const operateFunctions = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide,
};

const clickedButton = document.querySelector('.buttons');
    clickedButton.addEventListener('click', (event) => {
        display.textContent = numbers.concat(event.target.value);
        console.log(this.value);
    })

const display = document.querySelector('.console');

let numbers = '';



