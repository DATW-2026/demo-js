// Sentencias y expresiones

let n = 5 * 5; // let n = 5 * 5 --> Sentencia ||  5 * 5 --> Expresión  || = --> Operador
console.log(5 * 5);
console.log(25);
console.log(n);

// Expresiones: datos & variables & operadores

// Datos: string
let userName = 'Pepe';
let userSurname = 'Perez';

// Concatenación de strings
let longName = userName + ' ' + userSurname;
console.log(longName);

// Template string
let formatName = `
    Pepe
    Perez
`;
console.log(formatName);

// Interpolación de variables --> `${variable}`
let fullName = `${userName} ${userSurname}`;
console.log(fullName);

// Datos: number
// Operadores aritméticos
let result;
result = 2 + 2;
result = 2 - 2;
result = 2 * 2;
result = 2 / 2;
result = 2 & 2; // Modulo (resto) de la división entera (útil para calcular si la variable es par/impar o múltiplo de otro número)

// Operador sobrecargado (dos funcionalidades al mismo tiempo). Si en una expresión hay un string, concatena en vez de calcular.
console.log('2' + 2 + 2); // 222
console.log(2 + 2 + '2'); // 42 (primero realiza la suma 2 + 2 y después 4 + '2' concatenando = 42)

// Coerción de tipos o casting automático
let a = '2';
console.log(a + 2);
// a --> string
// + ¿concatenación de strings u operador de suma? (como hay string en la expresión, es concatenación)
// 2 --> '2' (coerción de tipos: convierte el number en string para poder concatenar con '2')
// '22'

console.log(a - 2); // ouput = 0 (coerción de tipos automática ya que el operador de resta no se usa para nada más, no puede ser concatenación así que convierte a --> 2 (number))

// Casting de tipos
console.log(Number(a) + 2); // casting (obligamos a JS a convertir la variable a ('2') a tipo number)

let b = '2';
console.log(typeof b); // string
console.log(Number(b) + 2); // 4
console.log(typeof b); // string
let c = Number(b); // reasignación de la variable, ahora c es number
console.log(c); // 2

// Coerción de booleans

// Falsies --> Coerción a false (cuando le pides al valor que se convierta en boolean = false)
// Trueties --> Coerción a true (cuando le pides al valor que se convierta en boolean = true)
console.log(Boolean(22)); // true
console.log(Boolean('string')); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean(true)); // true

console.log('-----------');

console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(0n)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('')); // false
console.log(Boolean(NaN)); // false (Not a Number)

// Not a Number (NaN)
console.log(0 / 12); // 0
console.log(12 / 0); // Inifinity
console.log(-12 / 0); // -Inifinity
console.log(0 / 0); // NaN

console.log('Pepe' + 2); // Pepe2
console.log('Pepe' - 2); // NaN
