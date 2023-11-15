// Importamos la función suffle de underscore para mezclar el arreglo
import { shuffle } from "underscore";

// Definimos una función para crear la baraja de cartas
/**
 * This function create a new deck 
 * @returns {Array<string>} returns a new cards deck
 */
export const createDeck = () => {

    // Definimos las constantes para los tipos de cartas y las cartas especiales
    const TYPES_CARDS = ['C', 'D', 'H', 'S'],
        TYPE_SPECIAL_CARDS = ['A', 'J', 'Q', 'K'];

    // Definimos el deck
    let deck = [];

    // Este bucle se encarga de crear las cartas numéricas (del 2 al 10) para cada tipo
    for (let i = 2; i <= 10; i++) {
        for (let type of TYPES_CARDS) {
            deck.push(i + type);
        }
    }

    // Este bucle se encarga de crear las cartas especiales (A, J, Q, K) para cada tipo
    for (let type of TYPES_CARDS) {
        for (let special of TYPE_SPECIAL_CARDS) {
            deck.push(special + type);
        }
    }

    // Usamos la función shuffle de lodash para mezclar la baraja de cartas
    return shuffle(deck);// Devolvemos la baraja de cartas mezclada
}

//export default createDeck; // También podemos exportar de esta manera