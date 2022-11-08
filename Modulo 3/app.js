const product = { count: 3, price: 12.55, type: "ropa" };

let vat = 0.21;
const vatfood = 0.1;
const vatbook = 0.04;
let totalVat = 0;
let productCount = 0;

function getTotal(product) {
  productCount = product.count >= 0 ? product.count : 0;

  return(productCount * product.price);
}

function getVat(product) {
  switch (product.type) {
    case 'alimentacion':
      vat = vatfood;
      break;
    case 'libro':
      vat = vatbook;
      break;
    default:
      break;
  }

  // if (product.type === "alimentacion") vat = vatfood;
  // else if (product.type === "libro") vat = vatbook;

  return(product.price * vat);
}

function getTotalVat(product) {
  return product.count > 0 ? product.count * getVat(product) : 0;
}

function printProductPrice(product) {
  const subtotal = getTotal(product);
  const vat = getTotalVat(product);
  const total = subtotal + vat;

  console.log("Subtotal:", subtotal + "€");
  console.log("IVA:", vat + "€");
  console.log("Total:", total + "€");
}

printProductPrice(product);




// Calcular sueldo neto en nómina
const empleado = {
  bruto: 14500,
  hijos: 2,
  pagas: 14,
};

function getTaxes(empleado) {
  let retention = 0;

  if (empleado.bruto > 12000) retention = 0.08;
  if (empleado.bruto > 24000) retention = 0.16;
  if (empleado.bruto > 34000) retention = 0.3;

  retention = empleado.hijos > 0 ? retention - 0.02 : 0;

  return retention;
}

function netSalary(empleado) {
  return empleado.bruto - empleado.bruto * getTaxes(empleado);
}

function monthlyNetSalary(empleado) {
  return empleado.pagas == 14 ? netSalary(empleado) / 14 : netSalary(empleado) / 12;
}

function printSalary(product) {
  const retention = getTaxes(empleado);
  const netsalary = netSalary(empleado);
  const monthlynetsalary = monthlyNetSalary(empleado);

  console.log("Retención:", retention + "%");
  console.log("Salario neto:", netsalary + "€");
  console.log("Salario neto mensual:", monthlynetsalary + "€");
}

printSalary(empleado);