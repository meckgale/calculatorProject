/*
Step-1: Basic math operation functions

Step-2: A function that takes 2 numbers and operator as argument and calls the function for operation

Step-3: HTML and CSS layout

Step-4: A function that shows clicked numbers on buttons in the display.

Step-5: Store first number when user click an operator. Also store the operator.

Ste-6: Extras
*/
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y ;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

const operateFunctions = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide,
};

const operate = (firstInput, lastInput, operationSign) => {
    let firstNumber = parseInt(firstInput);
    let lastNumber = parseInt(lastInput);
    return operateFunctions[operationSign](firstNumber, lastNumber);
}

const clickedButtons = document.querySelectorAll('.buttons');

const screen = document.querySelector('.console');

const operands = document.querySelectorAll('.operation');

let input;
let inputArray = [];


clickedButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        input = e.target.value;
        if(input !== operands){
            inputArray.push(input);
            if(!inputArray.includes(operands)) {
                firstInput = inputArray.join('');
                screen.textContent = firstInput
            }
            else if(inputArray.includes(operands)) {
                let index = inputArray.indexOf(operands);
                lastInput = inputArray.slice(index).join('');
                screen.textContent = lastInput
            }
        }
        else if(input === operands && operands !== '='){
            input = operationSign;
            screen.textContent = operationSign;
        }
    })  
    screen.textContent = inputArray;
    operate();
})









