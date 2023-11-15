/**
 * This function creates an image of a card in HTML format
 * @param {*} carta 
 * @param {*} turno 
 */
export const createCard = (carta, turno, divPlayer) => {

    const IMG_CARD = document.createElement('img');

    IMG_CARD.src = `assets/cartas1/${carta}.webp`;
    IMG_CARD.classList.add('carta');
    divPlayer[turno].append(IMG_CARD);

}