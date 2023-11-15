/**
 * This function allows to know the value of the card
 * @param {string} card Example: H1, C3, AC...
 * @returns {Number} returns the value of the card
 */
export const cardValue = card => {

    const value = card.substring(0, card.length - 1);

    return (isNaN(value)) ? ((value === 'A') ? 11 : 10)
        : parseInt(value);
}