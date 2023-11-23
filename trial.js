const add = (x, y) =>  x + y;
const subtract = (x, y) =>  x - y;
const multiply = (x, y) =>  x * y;
const divide = (x, y) =>  x / y;

let firstInput;
let operator;
let lastInput;

function operate(operator, x, y) {
    if(operator === '+') {
        add(x, y);
    }
    else if(operator === '-') {
        subtract(x, y);
    }
    else if(operator === '*') {
        multiply(x, y);
    }
    else if(operator === '/') {
        divide(x, y);
    }
}

const screen = document.querySelector('.console');
const clickedButtons = document.querySelectorAll('.buttons');
const numbers = document.querySelectorAll('.number');
const operands = document.querySelectorAll('.operation');
let array = [];

numbers.forEach(number => {
    number.addEventListener('click', () => display(number.value));
});

function display(value) {
    array.push(value);
    screen.textContent = array.join('');
}

operands.forEach(operand => {
    operand.addEventListener('click', () => {
        if(!firstInput) {
            firstInput = parseFloat(screen.textContent);
            array = [];
            operator = operand.value;
        } else {
            lastInput = parseFloat(screen.textContent);
            operator = operand.value;
            const result = operate(operator, firstInput, lastInput);
            screen.textContent = result;
            firstInput = result;
            array = [];
        } 
    })
})