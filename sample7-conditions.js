// Condiciones

function randomNum() {
    return Math.floor(Math.random() * 11);
}

let c = randomNum();

if (c < 4) {
    // Solo si se cumple c
    console.log('es menor que 4');
} else if (c < 6) {
    // Solo si NO se cumple c
    console.log('es mayor que 4 y menor que 6');
} else {
    // Solo si NO se cumple c
    console.log('es mayor que 6');
}

// Siempre
console.log('El número es', c);
