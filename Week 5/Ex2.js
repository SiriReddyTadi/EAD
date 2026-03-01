const display = document.querySelector(".display");

let firstNumber = null;
let operator = null;
let shouldResetDisplay = false;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
};

function calculate(num1, num2, operationCallback) {
    return operationCallback(num1, num2);
}

function updateDisplay(value) {
    display.textContent = value;
}

function handleNumber(number) {
    if (display.textContent === "0" || shouldResetDisplay) {
        updateDisplay(number);
        shouldResetDisplay = false;
    } else {
        updateDisplay(display.textContent + number);
    }
}

function handleOperator(op) {
    if (operator !== null) computeResult();

    firstNumber = parseFloat(display.textContent);
    operator = op;
    shouldResetDisplay = true;
}

function computeResult() {
    const secondNumber = parseFloat(display.textContent);
    let result;

    switch (operator) {
        case "+":
            result = calculate(firstNumber, secondNumber, add);
            break;
        case "−":
            result = calculate(firstNumber, secondNumber, subtract);
            break;
        case "×":
            result = calculate(firstNumber, secondNumber, multiply);
            break;
        case "÷":
            result = calculate(firstNumber, secondNumber, divide);
            break;
        default:
            return;
    }

    updateDisplay(result);
    operator = null;
    shouldResetDisplay = true;
}

function clearEntry() {
    updateDisplay("0");
}

function allClear() {
    firstNumber = null;
    operator = null;
    updateDisplay("0");
}

document.querySelectorAll(".calculator button").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (!isNaN(value) || value === ".") {
            handleNumber(value);
        }
        else if (value === "+" || value === "−" || value === "×" || value === "÷") {
            handleOperator(value);
        }
        else if (value === "=") {
            computeResult();
        }
        else if (value === "C") {
            clearEntry();
        }
        else if (value === "AC") {
            allClear();
        }
    });
});