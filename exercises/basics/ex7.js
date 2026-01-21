// 7. Crea una función que, al ser llamada, imprima por consola el resultado de la multiplicación de dos números introducidos como parámetros.

const numA = 5;
const numB = 10;

// Declaración de función

function mult(a, b) {
    return a * b;
}

console.log(mult(numA, numB)); // 50

// Asignación de una expresión funcional:

const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(numA, numB));

// Arrow function o función flecha
const arrowMult = (a, b) => a * b;

console.log(arrowMult(numA, numB)); // 50
