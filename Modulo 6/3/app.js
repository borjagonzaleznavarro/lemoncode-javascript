// Constantes
var WORK_HOURS = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "15:00 - 16:00",
  "16:00 - 17:00"
];

// Datos
var myTeam = [
  {
    name: "María",
    availability: new Array(8).fill(true)
  },
  {
    name: "Pedro",
    availability: new Array(8).fill(true)
  },
  {
    name: "Esther",
    availability: new Array(8).fill(true)
  },
  {
    name: "Marcos",
    availability: new Array(8).fill(true)
  },
];

// 1. Generación aleatoria de la disponibilidad
for (member of myTeam) {
  let i = 0;
  console.log('Disponibilidad de ' + member.name);

  for (i=0; i<member.availability.length; i++) {
    var bool = Math.random() > 0.5 ? bool = 'Si' : bool = 'No';
    member.availability[i] = bool == 'Si' ? true: false;
    console.log(WORK_HOURS[i] + ': ' + bool);
  }
}

//2. Buscar hueco libre
let availability = true;
let i = 0;

while (availability == true && i < myTeam[0].availability.length) {
  if (myTeam[0].availability[i] == true && myTeam[1].availability[i] == true && myTeam[2].availability[i] == true && myTeam[3].availability[i] == true) {
    availability = false;
  }
  else {
    i++;
  }
}

if (!availability) {
  console.log('Hueco encontrado en el horario ' + WORK_HOURS[i]);
}
else {
  console.log('Lo siento. No hay hueco disponible en el equipo.');
}

// Calculadora de cambio óptimo de billeteetes y monedas
const money = [
  {
    type: "billete",
    value: 200,
    available: false
  },
  {
    type: "billete",
    value: 100,
    available: true
  },
  {
    type: "billete",
    value: 50,
    available: true
  },
  {
    type: "billete",
    value: 20,
    available: false
  },
  {
    type: "billete",
    value: 10,
    available: true
  },
  {
    type: "billete",
    value: 5,
    available: true
  },
  {
    type: "moneda",
    value: 2,
    available: true
  },
  {
    type: "moneda",
    value: 1,
    available: true
  },
  {
    type: "moneda",
    value: 0.5,
    available: false
  },
  {
    type: "moneda",
    value: 0.2,
    available: true
  },
  {
    type: "moneda",
    value: 0.1,
    available: true
  },
  {
    type: "moneda",
    value: 0.05,
    available: true
  },
  {
    type: "moneda",
    value: 0.02,
    available: true
  },
  {
    type: "moneda",
    value: 0.01,
    available: true
  },
]

document.getElementById('calc').addEventListener('click', calculate);

function calculate() {
  const total = document.getElementById('total').value ? document.getElementById('total').value : 0;
  const given = document.getElementById('entregado').value ? document.getElementById('entregado').value : 0;
  let difference = given - total;

  while (difference > 0) {
    for (moneyValue of money) {
      if (moneyValue.available == true && parseInt(difference / moneyValue.value) > 0) {
        console.log(parseInt(difference / moneyValue.value) + ' ' + moneyValue.type + ' de ' + moneyValue.value + ' euros');
        difference -= parseInt(difference / moneyValue.value) * moneyValue.value;
      }
    }
  }
}