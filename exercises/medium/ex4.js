// Crea una función que verifique si una cadena de texto recibida por parámetros es un pangrama (contiene todas las letras del abecedario).

const text = 'abcdefghijklmnñopqrstuvwxyz';

{
    const isPangram = (text) => {
        const alphabet = 'abcdefghijklmnñopqrstuvwxyz';
        const normalized = text.toLowerCase();

        for (let i = 0; i < alphabet.length; i++) {
            if (!normalized.includes(alphabet[i])) {
                return false;
            }
        }

        return true;
    };

    console.log(
        isPangram(text)
            ? `${text} es un pangrama`
            : `${text} no es un pangrama`,
    );
}
