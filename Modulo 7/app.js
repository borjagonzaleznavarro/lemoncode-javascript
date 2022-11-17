// Validar un IBAN

// Caso 1
let value = 'ES6600190020961234567890';
const pattern = /^[A-Z]{2}\d{22}$/;

console.log('Regex matches with ' + value + '? ->', pattern.test(value));

// Caso 2
value = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];
const pattern2 = /^[A-Z]{2}\d{2}(\s?\d{4}){5}$/;

value.forEach((value) => {
  console.log('Regex matches with ' + value + '? ->', pattern2.test(value));
});

// Caso 3
value = 'ES6600190020961234567890';
const pattern3 = /^([A-Z]{2})(\d{2})(\s?\d{4}){5}$/;
let result = pattern3.exec(value);
console.log('Código del pais: ' + result[1]);
console.log('Dígito de control: ' + result[2]);

// Validar matrícula coche

// Caso 1
value = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];
const pattern4 = /^\d{4}(\s|-|_)?[A-Z]{3}$/;

value.forEach((value) => {
  console.log('Regex matches with ' + value + '? ->', pattern4.test(value));
});

// Caso 2
value = ['2021 GMD', '2345-GMD', '4532BDB', '0320-AAA'];
const pattern5 = /^(\d{4})[\s-]?([A-Z]{3})$/;
for (let i = 0; i < value.length; i++) {
  result5 = pattern5.exec(value[i]);
  console.log('Matrícula: ' + value[i] + ', números: ' + result5[1] + ' y letras: ' + result5[2]);
}