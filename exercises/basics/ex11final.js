// 11. Adivina el número: Crea una función que primero guarde en una variable un número aleatorio del 1 al 10. Después, pregunte al usuario a través de un prompt un número del 1 al 10. Una vez recibida la respuesta, compare estos dos números. Si los números coinciden, imprime por consola un string indicando que el usuario ha acertado, sino, imprime por consola que el usuario ha fallado seguido del número correcto.

import promptSync from 'prompt-sync';
const prompt = promptSync();

function randomNum() {
    return Math.ceil(Math.random() * 10);
}

function validationInput(n) {
    const messages = [
        'Eso no es un número',
        'El número debe ser entero',
        'El número entero no es válido',
    ];
    let index = null;

    if (isNaN(n)) {
        index = 0;
    } else if (Math.trunc(n) !== n) {
        index = 1;
    } else if (n < 1 || n > 10) {
        index = 2;
    }

    return messages[index];
}

function guessNum() {
    const userName = prompt('¿Cómo te llamas? ');
    console.log(`Hola ${userName}`);
    console.log('Escribe Exit para terminar');
    let more = true;

    while (more) {
        console.log('-------------------------');
        let n = prompt('Escribe un número entero del 1 al 10: ');
        if (n.toLowerCase() === 'exit') {
            more = false;
        }
        n = Number(n);
        const errorValidation = validationInput(n);
        if (errorValidation) {
            //  if (errorValidation !== undefined)
            console.log(validationInput(n));
            continue;
        }
        const randomN = randomNum();
        if (n === randomN) {
            console.log(`Muy bien ${userName}, el número era ${randomN}`);
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
