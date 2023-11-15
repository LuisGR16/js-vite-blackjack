/**
 * This function allows to request the last card from the deck
 * @param {Array<string>} deck Receive the deck as an argument
 * @returns {Array<string>} Returns the deck without the last one
 */

export const orderCard = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'Ya no hay cartas en el deck';
    }

    return deck.pop();;
}

