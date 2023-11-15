import { cardValue } from './card-value'

// turn: 0 = primer jugador, y el último será el de la computadora
export const accumulatePoints = (card, turn, playerPoints, POINTS_HTML) => {

    if ( card === undefined ) throw new Error('no hay carta');
    if ( turn === undefined ) throw new Error('no hay turno');
    if ( playerPoints === undefined ) throw new Error('no hay player points');
    if ( POINTS_HTML === undefined ) throw new Error('no hay html');


    playerPoints[turn] += cardValue(card);
    POINTS_HTML[turn].innerText = playerPoints[turn];

    return playerPoints[turn];
}