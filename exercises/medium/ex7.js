// Escribe una función que reciba por parámetros el año de nacimiento, y calcule la edad de la persona.

const birthYear = 1990;

const calculateUserAge = (birthYear) => {
    const currentYear = new Date().getFullYear();

    return currentYear - birthYear;
};

console.log(
    `El usuario tiene ${calculateUserAge(birthYear + 1)} o ${calculateUserAge(birthYear)} años`,
);
