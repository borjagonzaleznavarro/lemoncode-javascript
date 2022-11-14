const carrito = [
  {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
  },
  {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
  },
  {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
  },
  {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
  }
];

function printCart(carro) {
  let cartContent = document.getElementById('cart-content');
  cartContent.innerHTML = '';

  // Comprobamos que el carrito no esté vacío
  if (carro.length) {
    // Recorremos el array
    for (product of carro) {
      let html = '<span>' + product['id'] + '</span>';
      html += '<span>' + product['name'] + '</span>';
      html += '<span>' + product['price'] + '</span>';
      html += '<span>' + product['count'] + '</span>';
      let premium = '';
      if (product['premium']) premium = '👑';
      html += '<span>' + premium + '</span>';
      html += '<span>' + (product['price'] * product['count']).toFixed(2) + '</span>';
      html += '<span><button onclick="deleteItem(' + carro.indexOf(product) + ')">🗑</button></span>';

      let productRow = document.createElement('div');
      productRow.className = 'row';
      productRow.innerHTML = html;
      cartContent.appendChild(productRow);
    }
  }
  // Si el carrito está vacío mostramos un mensaje
  else {
    let emptyCart = document.createElement('div');
    emptyCart.className = 'empty-cart';
    emptyCart.innerHTML = '<span>El carrito está vacío</span>';
    cartContent.appendChild(emptyCart);
  }

  printTotal(carro);
  printShipping(carro);
}

printCart(carrito);

function deleteItem(index) {
  // Eliminamos el item con el index que se pasa por parámetro
  carrito.splice(index, 1);
  // Volvemos a pintar el carrito
  printCart(carrito);
}

function getTotal(carro) {
  let total = 0;
  for (product of carro) {
    total += product['price'] * product['count'];
  }
  return total;
}

// Imprimir precio total
function printTotal(carro) {
  const total = getTotal(carro);
  let totalDiscounted = 0;
  let totalContainer = document.getElementById('total');
  let discountedContainer = document.getElementById('total-discounted');

  totalContainer.innerHTML = (total).toFixed(2);
  if (checkDiscount(total)) {
    totalDiscounted = total * 0.95;
    totalContainer.className = 'strike';
    discountedContainer.innerHTML = (totalDiscounted).toFixed(2);
  }
  else {
    discountedContainer.innerHTML = '';
    totalContainer.classList.remove('strike');
  }
}

function checkDiscount(money) {
  return money > 50 ? true : false;
}

// Filtrar por premium
let checkFilterPremium = document.getElementById('filter-premium');
checkFilterPremium.addEventListener('change', filterPremium);

function filterPremium() {
  let cartFiltered = [];

  if (checkFilterPremium.checked == true) {
    for (item of carrito) {
      if (item.premium == true) {
        cartFiltered.push(item);
      }
    }
    printCart(cartFiltered);
  }
  else {
    printCart(carrito);
  }
}

// Comprobar si todos los productos son premium
function checkPrime(carro) {
  let allPremium = true;
  let i = 0;
  while (allPremium && i < carro.length) {
    allPremium = allPremium && carro[i].premium;
    i++;
  }

  return !allPremium;
}

// Pintar gastos de envío
function printShipping(carro) {
  const shippingContent = document.getElementById('shipping');
  if (checkPrime(carro)) {
    shippingContent.innerHTML = 'Con gastos de envío';
  }
  else {
    shippingContent.innerHTML = 'Gastos de envío: 0';
  } 
}