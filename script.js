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

const operate = (firstInput, lastInput, input) => {
    let firstNumber = parseInt(firstInput);
    let lastNumber = parseInt(lastInput);
    return operateFunctions[input](firstNumber, lastNumber);
}

const display = document.querySelector('.console');
const operand = document.querySelector('.operand');

let numbers = '';

const clickedButton = document.querySelector('.buttons');
    clickedButton.addEventListener('click', (event) => {
        let input = (event.target.value);
        if(input !== operand){
            numbers += input;  
            display.textContent = numbers;
            console.log(input);
            console.log(numbers);
        }
        else if(input === operand){
            numbers = "";
            display.textContent = numbers;
            console.log(input);
            console.log(numbers);
        }
        
        
    })








