// Math modules
const add = (x, y) =>  x + y;
const subtract = (x, y) =>  x - y;
const multiply = (x, y) =>  x * y;
const divide = (x, y) =>  x / y;
// Screen variables
let firstInput;
let operator;
let lastInput;
let result;
// Calling math modules
function operate(operator, x, y) {
    if(operator === '+') {
        return add(x, y);
    }
    else if(operator === '-') {
        return subtract(x, y);
    }
    else if(operator === '*') {
        return multiply(x, y);
    }
    else if(operator === '/') {
        return divide(x, y);
    }
    else if(operator === '=') {
        return result;
    }
}
// DOM interactions
const screen = document.querySelector('.console');
const clickedButtons = document.querySelectorAll('.buttons');
const numbers = document.querySelectorAll('.number');
const operands = document.querySelectorAll('.operation button');
const clear = document.querySelector('.top button');
let array = [];
// Clear function init
clear.addEventListener('click', () => {
    array = [];
    firstInput = 0;
    screen.textContent = 0;
})
// Displaying numbers
numbers.forEach(number => {
    number.addEventListener('click', () => display(number.value));
});
// Display function
function display(value) {
    array.push(value);
    screen.textContent = array.join('');
}
// Operation init
operands.forEach(operand => {
    operand.addEventListener('click', () => {
        if(!firstInput) {
            firstInput = parseFloat(screen.textContent);
            operator = operand.innerText;
            array = [];
        } else {
            lastInput = parseFloat(screen.textContent);
            result = operate(operator, firstInput, lastInput);
            operator = operand.innerText;
            screen.textContent = result;
            firstInput = result;
            array = [];
        } 
    })
})









