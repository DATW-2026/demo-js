// 13. Crea una función que reciba un parámetro de tipo string e imprima por consola el string revertido. (ejemplo: 'casa' => 'asac).

const text = 'pizza';

// Con bucle while
function revertText1(text) {
    let reversedText = ''; // declarar variable asignando un string vacío
    let i = text.length - 1; // declarar índice asígnando la longitud del string -1, ya que empieza a contar en el cero

    // condición: mientas el índice sea mayor o igual que cero (para incluir la primera letra del string)
    while (i >= 0) {
        // result = result + text[i];
        reversedText += text[i]; // guarda la letra en la posición del índice en la variable result. Igual que

        i--; // retrocede a la posición anterior del string
    }

    return reversedText;
}

console.log(`while: [${text}] al revés es [${revertText1(text)}]`);

// Con bucle for

function revertText2(text) {
    let reversedText = '';

    for (let i = text.length - 1; i <= 0; i--) {
        reversedText += text[i];
    }

    return reversedText;
}

console.log(`for: [${text}] al revés es [${revertText1(text)}]`);
