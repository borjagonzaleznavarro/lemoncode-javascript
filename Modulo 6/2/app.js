const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

document.getElementById('encrypt').addEventListener('click', showEncrypt);
document.getElementById('decrypt').addEventListener('click', showDecrypt);

function encrypt() {
  var input = document.getElementById('input').value;
  let resul = '';

  for (letter of input) {
    resul += plainAlphabet.indexOf(letter) >= 0 ? encryptedAlphabet[plainAlphabet.indexOf(letter)]: letter;
  }

  return resul;
}

function decrypt() {
  var output = document.getElementById('output').value;
  let resul = '';

  for (letter of output) {
    resul += encryptedAlphabet.indexOf(letter) >= 0 ? plainAlphabet[encryptedAlphabet.indexOf(letter)] : letter;
  }

  return resul;
}

function showEncrypt() {
  var output = document.getElementById('output');
  output.value = encrypt();
}

function showDecrypt() {
  var input = document.getElementById('input');
  input.value = decrypt();
}

// GENERADOR ALEATORIO //
function randomPick(n, min, max) {
  let randomArray = [];
  let i = 0;

  while (i<n) {
    let number = Math.floor(Math.random() * (max - min + 1) ) + min;
    if (randomArray.indexOf(number) < 0) {
      randomArray.push(number);
      i++;
    }
  }

  return randomArray;
}