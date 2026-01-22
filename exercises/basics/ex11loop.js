// 11. Adivina el número: Crea una función que primero guarde en una variable un número aleatorio del 1 al 10. Después, pregunte al usuario a través de un prompt un número del 1 al 10. Una vez recibida la respuesta, compare estos dos números. Si los números coinciden, imprime por consola un string indicando que el usuario ha acertado, sino, imprime por consola que el usuario ha fallado seguido del número correcto.

import promptSync from 'prompt-sync';
const prompt = promptSync();

function randomNum() {
    return Math.ceil(Math.random() * 10);
}

function isValidInput(n) {
    if (isNaN(n)) {
        console.log('Eso no es un número');
        return false;
    }
    if (Math.trunc(n) !== Number(n)) {
        console.log(`${userName}, el número debe ser entero`);
        return false;
    }
    if (n < 1 || n > 10) {
        console.log(`El número entero ${n} no es válido`);
        return false;
    }
    return true;
}

function guessNum() {
    const userName = prompt('¿Cómo te llamas? ');
    console.log(`Hola ${userName}`);

    let more = true;

    while (more) {
        console.log('-------------------------');
        let n = prompt('Escribe un número entero del 1 al 10: ');
        n = Number(n);
        if (!isValidInput(n)) {
            continue;
        }
        const randomN = randomNum();
        if (n === randomN) {
            console.log(`Muy bien ${userName}`);
            more = false;
        } else {
            console.log(
                `Lo siento ${userName}, el número correcto era ${randomN}`,
            );
        }
    }

    console.log(`¡Gracias por jugar, ${userName}!`);
}

guessNum();
