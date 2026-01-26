// Crea una función que elimine el primer y último caracter de un string recibido por parámetros.

{
    // Con métodos de arrays
    function removeFirstLast(text = '') {
        let result = '';
        let arrayLetters = text.split(''); // Convierte de string a array
        arrayLetters.pop(); // .poo elimina el último elemento de un array
        arrayLetters.shift(); // .shift elimina el primer elemento de un array
        result = arrayLetters.join(''); // Convierte de array a string
        return result;
    }

    console.log(removeFirstLast('Hola')); // ola
}

{
    // Con métodos de strings
    function removeFirstLast(text = '') {
        let result = '';
        // result = text.substring(1, text.length - 1);
        result = text.slice(1, -1); // devuelve un trozo del string entre los índices especificados
        return result;
    }

    console.log(removeFirstLast('Hola')); // ola
}
