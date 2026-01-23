let z = undefined; // Normalmente usamos null para asigar el valor undefined a una variable de manera intencionada
console.log(z); // undefined

let x = null;
console.log('typeof bug:', typeof x); // object --> error de typeof desde JS original, debería ser null

let n = 9_000_000; // Esto son 9 millones (9000000), podemos escribir números grandes así por claridad
console.log(n); // 9000000

let num = 9_000_000_000_000_000_000;
console.log(num + 1); // 9000000000000000000 (fallo en precisión en números grandes)

let bigIntNum = 9_000_000_000_000_000_000n;
console.log(bigIntNum + 1n); // 9000000000000000001n (hace bien la suma)

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 --> Número máximo con el que puedo trabajar con precisión en JS
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MIN_VALUE); // 5e-324

// Arrays (matrices)
const arr1 = [];
const arr2 = new Array();

// Objects
const obj1 = {};
const obb2 = new Object();

const obj = {
    prop1: 'value1',
    prop2: 'value2',
};
console.log(obj);

obj.prop1 = 'value1.2'; // Cambio el valor de la propiedad prop1
console.log(obj);

obj.prop3 = 'value3'; // Añado una nueva propiedad prop3 con el valor asignado de val3
console.log(obj);

// Anidamiento de objetos --> inyecto un objeto como valor de la propiedad de un objeto
obj.prop4Obj = {
    prop1: 'value1',
    prop2: 'value2',
};
console.log(obj);

obj.prop5Arr = ['item1', 'item2', 'item3'];
console.log(obj); // Todo el objeto
console.log(obj.prop1); // Acceso a la propiedad prop1 del objeto
console.log(obj.prop5Arr); // Acceso a la propiedad prop5Arr del objeto
console.log(obj.prop5Arr[1]); // Acceso al segundo ítem dentro de prop5Arr del objeto

delete obj.prop2; // Elimina la propiedad prop2 del objeto, no se suele usar ya que choca con clases y TS, pero se puede en JS
console.log(obj); // Objeto sin la propiedad prop2

// Array de arrays (matrices multidimensionales)
const table = [
    ['a', 2, 3],
    [1, 't', 3],
    [1, 2, 3],
];
console.table(table);
console.log(table[1][1]);

// bucle para recorrer matrices

const texts = [];

for (let i = 0; i < table.length; i++) {
    const line = table[i];
    for (let j = 0; j < line.length; j++) {
        const item = line[j];
        if (typeof item === 'string') {
            texts.push(item);
        }
    }
}
console.log(texts);

// Métodos de arrays

// push y pop
const itemPush = texts.push('itemPush'); // Añade un item al final de un array
const itemPop = texts.pop(); // Borra el último item
console.log(texts);
console.log(itemPop);
texts.shift(); // Elimina el primer elemento de un array
console.log(texts);

const friends = ['Pepe', 'Luisa', 'Elena', 'Ernesto'];
console.log(friends);
friends.sort(); // ordena los elementos del array
console.log(friends);
const ordered = friends.toSorted(); // ordena los elementos del array en un nuevo array, manteniendo el original
console.log(friends);
console.log(ordered);
console.log(friends.includes('Ramón')); // false

const numbers = [3, 7, 2, 8, 4, 1];
const original = structuredClone(numbers); // clona un objeto entero, independientemente de su profundidad (deep clone)
// const original = [...numbers]; --> Solo actua en un nivel
// const original = numbers.toSorted();
numbers.sort();
console.log(original);
console.log(numbers);

const namesText = friends.join(); // devuelve un string de un array separados (por defecto), con comas
console.log(namesText); // Elena,Ernesto,Luisa,Pepe
const namesText2 = friends.join(' | ');
console.log(namesText2); // Elena | Ernesto | Luisa | Pepe
