// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];


// Imprime el carrito
function printCart(products) {
  var cart = document.getElementById("cart");
  for (product of products) {
    var row = document.createElement("li");
    row.setAttribute("class", "row");
    row.appendChild(printDetails(product));
    row.appendChild(printInput(product));
    cart.appendChild(row);
  }
}

// Imprime los detalles de cada linea de producto
function printDetails(product) {
  let description = product.description;
  let price = product.price;

  var details = document.createElement("div");
  details.setAttribute("class", "details");
  details.innerHTML = description + " - " + price + "€/ud."

  return details;
}

// Imprime el input de cada linea de producto
function printInput(product) {
  var input = document.createElement("input");

  input.setAttribute("class", "product-unit");
  input.setAttribute("type", "number");
  input.setAttribute("value", product.units);
  input.setAttribute("min", 0);
  input.setAttribute("max", product.stock);
  input.addEventListener("change", event => updateUnits(products.indexOf(product), event.target.value));

  return input;
}

function updateUnits(index, units) {
  products[index].units = parseInt(units);
  toggleButton();
}

// Comprueba si hay unidades de algún producto
function checkUnits() {
  let success = true;
  let i = 0;
  while (success && i < products.length) {
    if (products[i].units) success = false;
    i++;
  }

  return success;
}

// Habilita o deshabilita el botón de calcular
function toggleButton() {
  let success = checkUnits();
  let button = document.getElementById("calc");
  if(!success) {
    button.disabled = false; // Enabled
  }
  else {
    button.disabled = true; // Disabled
  }
}

// Imprime los importes
function calculate() {
  let subtotal = document.getElementById('subtotal');
  let iva = document.getElementById('iva');
  let total = document.getElementById('total');

  subtotal.innerHTML = (getSubtotal()).toFixed(2);
  iva.innerHTML = (getIVA()).toFixed(2);
  total.innerHTML = (getSubtotal() + getIVA()).toFixed(2);
}

function getSubtotal() {
  let subtotal = 0;
  for (product of products) {
    subtotal += product.price * product.units;
  }

  return subtotal;
}

function getIVA() {
  let iva = 0;
  for (product of products) {
    iva += (product.price * product.units) * product.tax / 100;
  }

  return iva;
}

toggleButton();
printCart(products);

document.getElementById('calc').addEventListener('click', calculate);