// Crea una función que reciba la edad de una persona por parámetros y verifique si es mayor de edad. Imprime por consola un string con el resultado.
const userAge = 16;

const isAdult = (userAge) => {
    const adult = 18;
    if (userAge >= 18) {
        return true;
    }
    return false;
};

console.log(
    isAdult(userAge)
        ? `el usuario tiene ${userAge} años y es mayor de edad`
        : `el usuario tiene ${userAge} años y no es mayor de edad`,
);
