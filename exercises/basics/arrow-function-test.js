const userName = 'Ana';

// Función básica
function greeting(userName) {
    const result = `¡Hola ${userName}!`;
    return result;
}

console.log('function:', greeting(userName));

// Expresión funcional
const grettingExp = function (userName) {
    const result = `¡Hola ${userName}!`;
    return result;
};

console.log('functional expression:', greeting(userName));

// Función flecha
const greettinArrow = (userName) => `¡Hola ${userName}!`;
console.log('arrow function:', greeting(userName));
