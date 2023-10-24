function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function sub(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function mul(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function div(firstNumber, secondNumber) {
  if (secondNumber === 0) {
    throw Error("Division by zero is not allowed!");
  }

  return firstNumber / secondNumber;
}

export { add, sub, mul, div };
