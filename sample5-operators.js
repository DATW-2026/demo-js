// Operadores de asignación
const x = 22;

// Operadores aritméticos
let result;
result = 2 + 2; // Suma
result = 2 - 2; // Resta
result = 2 * 2; // multiplicación
result = 2 / 2; // División
result = 2 % 2; // Modulo de la división o resto
result = 2 ** 2; // Exponente, elevado a...

// Operadores de asignación + aritméticos (se puede usar con todos los operadores aritméticos)
let a = 2;
a += 3; // a = a + 3
a -= 3; // a = a -3, etc...

// Operadores unarios
a++; // a = a + 1
a--; // a = a - 1

// Operadores de cadena (string)
const text = 'Pepe' + ' ' + 'Perez'; // Pepe Perez

// Operadores de comparación - Igualdad
{
    const foo = 3;
    const bar = 4;

    console.log(3 == foo); // true
    console.log('3' == foo); // true (coerción de tipos)
    console.log(3 == '3'); // true
    console.log(foo != 4); // true
    console.log(bar != '3'); // true

    // Igualdad estricta
    console.log(3 === foo); // true
    console.log(foo !== '3'); // true
    console.log(3 !== '3'); // true
}

// NaN
{
    const x = NaN;
    console.log('¿x vale NaN?', x === NaN); // false
    console.log('¿x vale NaN?', isNaN(x)); // True
    console.log('NaN es un', typeof x); // number
}

// Ceros. Los 0 y -0 son iguales en JavaScript
{
    const x = 0;
    const y = -0;

    console.log('Comparando con signo', x === y); // true
}

// Operadores de comparación - Otros
{
    const foo = 3;
    const bar = 4;

    console.log(bar > foo); // true
    console.log('12' > 2); // true (coerción de tipos)
    console.log(bar >= foo); // true
    console.log(foo >= 3); // true
    console.log(foo < bar); // true
    console.log('2' < 12); // true
    console.log(foo <= bar); // true
}

// Operadores bit a bit (no nos importan en web)

// Operadores lógicos
// Operador condicional (ternario)
// Operador coma
// Operadores relacionales
