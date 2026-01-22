// 10. Crea una función que imprima por consola un número al azar entre 1 y 10.

function randomNum() {
    return Math.ceil(Math.random() * 10);
}

for (let i = 1; i <= 20; i++) {
    console.log(i, randomNum());
}

//console.log(randomNum());
