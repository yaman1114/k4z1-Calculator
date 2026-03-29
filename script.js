let firstNumber = '';
let secondNumber = '';
let operator = '';
let operatorSelected = false;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return 'Error: Divide by 0';
    }
    return a / b;
}


function add(a, b) {
    return a + b;
}

function appendNumber(num) {
    let display = document.getElementById('display');
    if (operatorSelected) {
        display.value = '';
        operatorSelected = false;
    }
    display.value += num;
}

function appendDecimal() {
    let display = document.getElementById('display');
    if (operatorSelected) {
        display.value = '0';
        operatorSelected = false;
    }
    if (display.value.includes('.')) return;
    display.value += '.';
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
    if (operator === '/') {
        display.value = divide(num1, num2);
    }
    if (operator === '+') {
        display.value = add(num1, num2);
    } else if (operator === '-') {
        display.value = subtract(num1, num2);
    } else if (operator === '*') {
        display.value = multiply(num1, num2);
    } else if (operator === '/') {
        display.value = divide(num1, num2);
    }

    firstNumber = display.value;
    operator = '';
    operatorSelected = true;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
    operatorSelected = false;
}
