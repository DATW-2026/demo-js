// 12. Crea una función que reciba un número como parámetro e imprima por consola si el número dado es par o impar.

const num = 6;

function pairOrEven(num) {
    let result;

    if ((num & 1) === 0) {
        result = 'par';
    } else {
        result = 'impar';
    }

    return result;
}

console.log(`el número ${num} es`, pairOrEven(num));
