let display = document.getElementById('display');
let currentOperand = '';
let operator = '';
let previousOperand = '';

function appendNumber(number) {
    currentOperand += number;
    updateDisplay();
}

function operate(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operator = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

function calculate() {
    if (currentOperand === '' || previousOperand === '') return;
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentOperand = result;
    operator = '';
    previousOperand = '';
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    operator = '';
    previousOperand = '';
    display.value = '';
}

function updateDisplay() {
    if (operator) {
        display.value = `${previousOperand} ${operator} ${currentOperand}`;
    } else {
        display.value = currentOperand;
    }
}
