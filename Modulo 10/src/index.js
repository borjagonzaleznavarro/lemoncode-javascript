// Datos de ejemplo
const user = {
    id: 4451234,
    name: "Javi",
    surname: "Calzado",
    age: 36,
};

const numbers = ["Uno", "Dos", "Tres", "Cuatro", "Cinco"];

const names = ["Ana", "Luisa", "Raquel", "Amancio", "Pablo", "Alicia"];

// hasId ----- HAY QUE ARREGLARLA
const hasId = ({ id }) => (id ? true : false);
console.log(hasId(user));

// head
const head = ([firstItem]) => firstItem;
console.log(head(numbers));

// tail
const tail = ([ , ...restItems ]) => restItems;
console.log(tail(numbers));

// swapFirstToLast
const swapFirstToLast = ([firstItem, ...restItems]) => [...restItems, firstItem];
console.log(swapFirstToLast(numbers));

// excludeId
const excludeId = ({ id, ...restItems }) => restItems;
console.log(excludeId(user));

// wordsStartingWithA
const wordsStartingWithA = array => array.filter(element => element[0] == "A" || element[0] == "a");
console.log(wordsStartingWithA(names));

// concat
const name1 = "Ana";
const name2 = "Luisa";
const name3 = "Raquel";

const concat = (...array) => array.join(" | ");
console.log(concat(name1, name2, name3));

// multArray
const arr = [1, 2, 3, 4, 5];

const multArray = (arr, x) => arr.map(number => number * x);
console.log(multArray(arr, 2));

// calcMult
let accumulator;
let currentValue;
const calcMult = arr => arr.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log(calcMult(arr));

// swapFirstSecond
const swapFirstSecond = ([firstItem, secondItem, ...restItems]) => newArray = [secondItem, firstItem, ...restItems];
console.log(swapFirstSecond(numbers));

// firstEqual
const firstEqual = (letter, ...array) => {
    const regex = new RegExp('^' + letter + '');
    return array.every(array => regex.test(array))
}
console.log(firstEqual('A', name1, name2, name3));

// longest
const longestArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const longest = (...array) => {
    array.sort((a, b) => (a.length < b.length ? 1 : -1));
    return array[0];
}

console.log(longest(arr, numbers, names, longestArray));

// searchInStringV1
const searchInStringV1 = (string, letter) =>
    string
        .split("")
        .reduce((sum, character) => {
            if (character == letter) sum++;
            return sum;
        }, "");

console.log(searchInStringV1('cadena de texto', 'a'));

// searchInStringV2
const searchInStringV2 = (string, character) =>
    string
        .split("")
        .filter(string => string == character).length;

console.log(searchInStringV2('cadena de texto', 'a'));

// sortCharacters
const sortCharacters = string =>
    string
        .split("")
        .sort((a, b) => (a > b ? 1 : -1))
        .join();

console.log(sortCharacters('cadena de texto'));

// shout
// const shout = (...words) => {
//     words = words.unshift("¡");
//     words.push("!");
//     return words
// }

const shout = (...words) => {
    words.push("!");
    words.unshift("!");
    return words.join(" ").toUpperCase();
}

console.log(shout('hola', 'que', 'tal'));

// Lista de la compra
const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];

// A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.
const iva = shoppingCart => shoppingCart.map(product => product.price * 0.21)
console.log("IVA de todos los productos: " + iva(shoppingCart));

// B. Ordena la lista de más a menos unidades.
const sortUnits = shoppingCart => shoppingCart.sort((a, b) => (a.units < b.units ? 1 : -1))
console.log(sortUnits(shoppingCart));

// C. Obtén el subtotal gastado en droguería.
const subtotal = (cart) =>
    cart.reduce((sum, product) => {
        if (product.category == 'Droguería') sum += (product.price * product.units);
        return sum;
    }, 0);

console.log(subtotal(shoppingCart));

// D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.
const orderedList = cart => {
    return cart.sort((a, b) => (a.category > b.category ? 1 : -1))
        .map(product => product.product + ": " + product.price * product.units + "€")
}

console.log(orderedList(shoppingCart));