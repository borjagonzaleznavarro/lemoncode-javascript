let num1 = () => parseInt(document.getElementById('number').value);
let resul = 0;

sum = () => checkEmpty() ? resul += num1() : document.getElementById('resul').value = "Error";
rest = () => checkEmpty() ? resul -= num1() : document.getElementById('resul').value = "Error";
multiply = () => checkEmpty() ? resul *= num1() : document.getElementById('resul').value = "Error";
divide = () => checkEmpty() ? resul /= num1() : document.getElementById('resul').value = "Error";

function checkEmpty() {
  return isNaN(num1()) ? false : true;
}

function printResul() {
  document.getElementById('resul').value = resul;
  //Reseteamos resultado
  resul = 0;
}

document.getElementById('addition').addEventListener('click', sum);
document.getElementById('substraction').addEventListener('click', rest);
document.getElementById('multiplication').addEventListener('click', multiply);
document.getElementById('division').addEventListener('click', divide);
document.getElementById('resul-button').addEventListener('click', printResul);

