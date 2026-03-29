let firstNumber = '';
let secondNumber = '';
let operator = '';
let operatorSelected = false;

function multiply(a, b) {
    return a * b;
}

function appendNumber(num) {
    let display = document.getElementById('display');
    if (operatorSelected) {
        display.value = '';
        operatorSelected = false;
    }
    display.value += num;
}

function setOperator(op) {
    let display = document.getElementById('display');
    firstNumber = display.value;
    operator = op;
    operatorSelected = true;
}

function calculate() {
    let display = document.getElementById('display');
    secondNumber = display.value;

    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    if (operator === '*') {
        display.value = multiply(num1, num2);
    }

    firstNumber = display.value;
    operator = '';
    operatorSelected = true;
}