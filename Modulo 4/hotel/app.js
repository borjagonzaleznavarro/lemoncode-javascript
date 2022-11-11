const standardPrice = 100;
const juniorSuitePrice = 120;
const suitePrice = 150;
const spaPrice = 20;
const parkingPrice = 10;
let total = 0;

document.getElementById('calc').addEventListener('click', calc);

document.getElementById('room').addEventListener('change', calc);
document.getElementById('spa').addEventListener('change', calc);
document.getElementById('ocupation').addEventListener('change', calc);
document.getElementById('nights').addEventListener('change', calc);
document.getElementById('parking-nights').addEventListener('change', calc);

function calc() {
  let roomType = document.getElementById('room').value;
  let spa = document.getElementById('spa');
  let ocupation = document.getElementById('ocupation').value;
  let nightsNumber = document.getElementById('nights').value;
  let parkingNightsNumber = document.getElementById('parking-nights').value;

  // Primero comprobamos si el número de noches es positivo
  if (checkErrors(nightsNumber, parkingNightsNumber)) {
    // Obtenemos el precio según el tipo de habitación y número de noches
    total = getRoomPrice(roomType, nightsNumber);

    // Sumamos el spa si es está marcado el checkbox
    spa.checked == true ? total += spaPrice : total;

    // Obtenemos el precio según el tipo de ocupación
    total = getOcupationPrice(total, ocupation);

    // Obtenemos el precio de las noches de parking
    total += getParkingPrice(parkingNightsNumber);

    // Pintamos el total
    document.getElementById('total').innerHTML = 'Total: ' + total + '€';
  }
}

function checkErrors(nightsNumber, parkingNightsNumber) {
  let errorMessage = '';
  let flag = true;

  // Reseteamos el mensaje
  document.getElementById('error').innerHTML = '';

  if (nightsNumber < 1) {
    flag = false;
    errorMessage = 'El número mínimo de noches es 1<br>';
  } 
  if (parkingNightsNumber < 0) {
    flag = false;
    errorMessage += 'El número mínimo de noches de parking es 0\n';
    
  } 
  if (flag) {
    return flag;
  }
  else {
    document.getElementById('total').innerHTML = '';
    document.getElementById('error').innerHTML = errorMessage;
    // En caso de error mostramos el mensaje y paramos la ejecución
    return false;
  }
}

// Calcular precio de la habitación por noche
function getRoomPrice(roomType, nightsNumber) {
  let totalPrice = 0;

  switch(roomType) {
    case 'standard':
      totalPrice = standardPrice * parseInt(nightsNumber);
      break;
    case 'junior-suite':
      totalPrice = juniorSuitePrice * parseInt(nightsNumber);
      break;
    case 'suite':
      totalPrice = suitePrice * parseInt(nightsNumber);
      break;
    default:
      break;
  }

  return totalPrice;
}

// Calcular precio de la habitación según ocupación
function getOcupationPrice(total, ocupation) {
  switch(ocupation) {
    case 'individual':
      total -= total * 0.25;
      break;
    case 'triple':
      total += total * 0.25;
      break;
    default:
      break;
  }

  return total;
}

function getParkingPrice(parkingNightsNumber) {
  return parkingNightsNumber * parkingPrice;
}