// Escribe una función que reciba una palabra y revise si es un palíndromo.
const word = 'reconocer'; // palindromo ejemplo: radar, reconoder, oso, ojo, ana...
{
    // Con métodos de arrays

    const isPalindrome = (word) => {
        let result = '';
        let wordArray = word.split('');
        let reverseWordArray = [];

        for (let i = wordArray.length - 1; i >= 0; i--) {
            const letter = wordArray[i];

            reverseWordArray.push(letter);
        }

        if (wordArray.join('') === reverseWordArray.join('')) {
            result = true;
        } else {
            return false;
        }

        return result;
    };
    console.log(
        isPalindrome(word) === true
            ? `La palabra ${word} es un palíndromo`
            : `La palabra ${word} no es un palíndromo`,
    );
}

{
    // Con métodos de arrays, optimizado sin variables innecesarias

    const isPalindrome = (word) => {
        const wordArray = word.split('');
        const reverseWordArray = [];

        for (let i = wordArray.length - 1; i >= 0; i--) {
            reverseWordArray.push(wordArray[i]);
        }

        return wordArray.join('') === reverseWordArray.join(''); // boolean
    };
    console.log(
        isPalindrome(word) === true
            ? `La palabra ${word} es un palíndromo`
            : `La palabra ${word} no es un palíndromo`,
    );
}

{
    // Con métodos de arrays, optimizado sin array invertido, comparando índices directamente hasta la mitad de la palabra
    const isPalindrome = (word) => {
        const chars = word.toLowerCase().split('');

        for (let i = 0; i < chars.length / 2; i++) {
            if (chars[i] !== chars[chars.length - 1 - i]) {
                return false;
            }
        }

        return true;
    };

    console.log(
        isPalindrome(word) === true
            ? `La palabra ${word} es un palíndromo`
            : `La palabra ${word} no es un palíndromo`,
    );
}

{
    const isPalindrome = (word) => {
        let reversed = '';

        for (let i = word.length - 1; i >= 0; i--) {
            reversed += word[i];
        }

        return word === reversed;
    };

    console.log(
        isPalindrome(word) === true
            ? `La palabra ${word} es un palíndromo`
            : `La palabra ${word} no es un palíndromo`,
    );
}
{
    // Con métodos de strings optimizado sin variables innecesarias
    const isPalindrome = (word) => {
        for (let i = 0; i < word.length / 2; i++) {
            if (word[i] !== word[word.length - 1 - i]) {
                return false;
            }
        }
        return true;
    };

    console.log(
        isPalindrome(word) === true
            ? `La palabra ${word} es un palíndromo`
            : `La palabra ${word} no es un palíndromo`,
    );
}
