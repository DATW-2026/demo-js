// 14. Crea una función que imprima por consola la tabla de multiplicar de un número introducido como parámetro.

const num = 9;

// while
const multiplicationTable = (num) => {
    let result = '';
    let i = 0;

    while (i <= 10) {
        // result += num * i;
        result += `${num}*${i} = ${num * i}
        `;
        i++;
    }

    return result;
};

console.log(`
    Tabla de multiplicar del ${num} (while):
        ${multiplicationTable(num)}`);

// for
function multiplicationTable2(num) {
    let result = '';

    for (let i = 0; i <= 10; i++) {
        // result += num * i;
        result += `${num}*${i} = ${num * i}
        `;
    }

    return result;
}

console.log(`
    Tabla de multiplicar del ${num} (for):
        ${multiplicationTable2(num)}`);
