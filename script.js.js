const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.button');
let currentNumber = '';
let previousNumber = '';
let currentOperation = null;

function updateScreen(value) {
  screen.textContent = value;
}

function clear() {
  currentNumber = '';
  previousNumber = '';
  currentOperation = null;
  updateScreen('0');
}

function backspace() {
  currentNumber = currentNumber.slice(0, -1);
  if (currentNumber === '') {
    currentNumber = '0';
  }
  updateScreen(currentNumber);
}

function plusMinus() {
  currentNumber = parseFloat(currentNumber) * -1;
  updateScreen(currentNumber);
}

function handleNumber(value) {
  if (currentNumber === '0') {
    currentNumber = value;
  } else {
    currentNumber += value;
  }
  updateScreen(currentNumber);
}

function handleOperator(value) {
  if (currentOperation !== null) {
    calculate();
  }
  currentOperation = value;
  previousNumber = currentNumber;
  currentNumber = '';
}

function calculate() {
  let result;
  const firstNumber = parseFloat(previousNumber);
  const secondNumber = parseFloat(currentNumber);
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    return;
  }
  switch (currentOperation) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case 'x':
      result = firstNumber * secondNumber;
      break;
    case '÷':
      result = firstNumber / secondNumber;
      break;
    default:
      return;
  }
  currentNumber = result.toString();
  currentOperation = null;
  previousNumber = '';
  updateScreen(result);
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('number')) {
      handleNumber(button.textContent);
    }
    if (button.classList.contains('operator')) {
      handleOperator(button.textContent);
    }
    if (button.classList.contains('clear')) {
      clear();
    }
    if (button.classList.contains('backspace')) {
      backspace();
    }
    if (button.classList.contains('plus-minus')) {
      plusMinus();
    }
    if (button.classList.contains('equals')) {
      calculate();
    }
  });
});
