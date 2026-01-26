// Crea una función que cuente las vocales que contiene una palabra dada por parámetros.

const word = 'abecedario';

{
    // strings
    const vowelsCount = (word) => {
        let result = 0;

        for (let i = 0; i < word.length; i++) {
            let letter = word[i];
            if (
                letter === 'a' ||
                letter === 'e' ||
                letter === 'i' ||
                letter === 'o' ||
                letter === 'u'
            ) {
                result += 1;
            }
        }

        return result;
    };

    console.log(`La palabra ${word} tiene ${vowelsCount(word)} vocales.`);
}
