let display = document.getElementById('display');
let firstNumber = '';
let operator = '';
let secondNumber = '';

function addToDisplay(num) {
  display.value += num;
}

function clearDisplay() {
  display.value = '';
  firstNumber = '';
  operator = '';
  secondNumber = '';
}

function add() {
  firstNumber = display.value;
  operator = '+';
  display.value = '';
}

function subtract() {
  firstNumber = display.value;
  operator = '-';
  display.value = '';
}

function multiply() {
  firstNumber = display.value;
  operator = '*';
  display.value = '';
}

function divide() {
  firstNumber = display.value;
  operator = '/';
  display.value = '';
}

function decimal() {
  if (display.value.indexOf('.')
}
