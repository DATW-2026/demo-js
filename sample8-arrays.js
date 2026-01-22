// Arrays (list) --> listas, arreglos

// Declaración con const
const list = ['Pepe', 22, true, 'Ernestina'];
const nums = [1, 5, 9, 12, 32, 35];
const contacts = ['Pepe', 'Ernestina', 'Luis'];

// Los arrays son objetos, y por lo tanto son mutables o dinámicos

console.log(contacts.length); // 3
console.log(contacts[0]); // Pepe
console.log(contacts[1]); // Ernestina

contacts[0] = 'Jose'; // Reasignación de una posición o índice con un nuevo valor o item (Pepe -> Jose)
console.log(contacts[0]); // Jose

contacts[3] = 'Rosa'; // Añadir manualmente un nuevo item en una nueva posición
console.log(contacts); // [ 'Jose', 'Ernestina', 'Luis', 'Rosa' ]

contacts[contacts.length] = 'Ana'; // Añadir un nuevo item al final del array
console.log(contacts); // [ 'Jose', 'Ernestina', 'Luis', 'Rosa', 'Ana' ]

contacts.push('Ramón'); // Añadir nuevo ítem mediante el método push
console.log(contacts); // [ 'Jose', 'Ernestina', 'Luis', 'Rosa', 'Ana', 'Ramón' ]

contacts[100] = 'María'; // Rellena los índices intermedios con items vacios
console.log(contacts); // [ 'Jose', 'Ernestina', 'Luis', 'Rosa', 'Ana', 'Ramón', <94 emty items>, 'María' ]

contacts.length = 2; // ¡Cuidado! .length no solo lee, también escribe. Esto borra el resto del array desde [2]
console.log(contacts); // [ 'Jose', 'Ernestina' ]

for (let i = 0; i < contacts.length; i++) {
    console.log(`Hola, ${contacts[i]}, ¿cómo estás?`); // Hola, Jose, ¿cómo estás? || Hola, Ernestina, ¿cómo estás?
}
