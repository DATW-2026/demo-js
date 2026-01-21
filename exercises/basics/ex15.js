// 15. Crea una función que reciba un número por parámetros e imprima por consola si el número recibido es un número primo.

const num = 6;

// while
function isPrime(num) {
    let result = 'es primo'; // asumimos que es primo e intentamos posteriormente demostrar lo contrario
    let i = num - 1;

    // Si el número es menor que uno no puede ser primo
    if (num <= 1) {
        result = 'No es primo';
        return result;
    }

    // dividimos el número entre los demás números inferiores hasta llegar a 1
    while (i > 1) {
        if (num % i === 0) {
            // si el resultado de la división es exacto, es decir, el resto es cero
            result = 'No es primo';
            break;
        }
        i--;
    }

    return result;
}

console.log('while:', isPrime(num));

// for
function isPrime2(num) {
    let result = 'es primo';

    if (num <= 1) {
        result = 'No es primo';
        return result;
    }

    for (let i = num - 1; i > 1; i--) {
        if (num % i === 0) {
            result = 'No es primo';
            break;
        }
    }

    return result;
}

console.log('for:', isPrime2(num));
