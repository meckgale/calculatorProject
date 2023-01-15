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

const display = document.querySelector('.console');

const clickedButton = document.querySelector('.buttons');

let input;

let inputArray = [];

let inputString;

let inputNumber;

const getInput = () => clickedButton.addEventListener('click', (event) => {
      input = event.target.value;
      inputArray.push(input);
      inputString = inputArray.join("");
      inputNumber = parseFloat(inputString);
      display.textContent = inputNumber;
      return inputNumber;
});

getInput();

const operand = document.querySelector('.operand');

const numbers = document.querySelector('.left-div')




// function processor() {
//     let data = [];
//     if(input !== operand){
//         data.push(input);
//         firstInput = data.join('');
//         return firstInput;
//     }
//     else{
//         operationSign = input;
//         return operationSign;
//     }
// }


// let numbers = '';

// const operand = document.querySelector('.operand');

// const clickedButton = document.querySelector('.buttons');
//     clickedButton.addEventListener('click', (event) => {
//         let input = (event.target.value);
//         if(input !== operand){
//             numbers += input;  
//             display.textContent = numbers;
//             console.log(input);
//             console.log(numbers);
//         }
//         else if(input === operand){
//             numbers = "";
//             display.textContent = numbers;
//             console.log(input);
//             console.log(numbers);
//         }
        
        
//     })








