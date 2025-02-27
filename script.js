const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultInput = document.getElementById('result');
const operatorButtons = document.querySelectorAll('.calc-btn');
const clearButton = document.querySelector('.clear');

let num1, num2, operator;

num1Input.addEventListener('change', (e) => {
    num1 = parseFloat(e.target.value);
});

num2Input.addEventListener('change', (e) => {
    num2 = parseFloat(e.target.value);
});

operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        operator = e.target.dataset.operator;
        calculate();
    });
});

clearButton.addEventListener('click', () => {
    num1Input.value = '';
    num2Input.value = '';
    resultInput.value = '';
    num1 = null;
    num2 = null;
    operator = null;
});

function calculate() {
    if (isNaN(num1) || isNaN(num2) || !operator) {
        return;
    }

    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = 'Error: Division by zero';
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = 'Invalid Operator!';
    }

    resultInput.value = result;
}
