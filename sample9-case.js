function makeGreeting(languaje) {
    let greeting;

    switch (language.toLowerCase) {
        case 'en':
            greeting = 'Hello my friend';
            break;
        case 'es':
            greeting = 'Hola amigo';
            break;
        case 'fr':
            greeting = 'Salut mon ami';
            break;
        case 'de':
            greeting = 'Hallo Freund';
            break;
        default:
            greeting = 'Hi';
            break;
    }

    return greeting;
}

const language = 'es';
console.log(makeGreeting(language));
