// Crea una función que reciba un año por parámetros y compruebe e imprima por consola si el año es bisiesto o no.

const year = 2000;

const isLeap = (year) => {
    if (year % 4 !== 0) {
        return false;
    } else if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    } else if (year % 100 === 0 && year % 400 !== 0) {
        return false;
    } else {
        return true;
    }
};

console.log(
    isLeap(year)
        ? `El año ${year} es bisiesto`
        : `El año ${year} no es bisiesto`,
);

// Función optimizada
const isLeapOp = (year) => {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
};

console.log(
    isLeapOp(year)
        ? `El año ${year} es bisiesto`
        : `El año ${year} no es bisiesto`,
);
