let num1 = () => parseInt(document.getElementById('number-1').value);
let num2 = () => parseInt(document.getElementById('number-2').value);

function sum() {
  return checkEmpty() ? document.getElementById('resul').value = num1() + num2() : document.getElementById('resul').value = "Error";
}

function rest() {
  return checkEmpty() ? document.getElementById('resul').value = num1() - num2() : document.getElementById('resul').value = "Error";
}

function multiply() {
  return checkEmpty() ? document.getElementById('resul').value = num1() * num2() : document.getElementById('resul').value = "Error";
}

function divide() {
  return checkEmpty() ? document.getElementById('resul').value = num1() / num2() : document.getElementById('resul').value = "Error";
}

function checkEmpty() {
  if (isNaN(num1()) || isNaN(num2()))
    return false;
  else
    return true;
}

document.getElementById('addition').addEventListener('click', sum);
document.getElementById('substraction').addEventListener('click', rest);
document.getElementById('multiplication').addEventListener('click', multiply);
document.getElementById('division').addEventListener('click', divide);

