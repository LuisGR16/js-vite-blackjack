import { createCard } from './create-card'
import { orderCard } from './order-card'
import { accumulatePoints } from './accumulate-points'
import { determineWinner } from './determine-winner'


// Turno de la computadora
export const turnComputer = ( minimumPoints, playerPoints, deck, POINTS_HTML, DIV_PLAYER_CARDS ) => {

    let computerPoints = 0;

    do {
        
        const CARD = orderCard( deck );
        // console.log({ minimumPoints, playerPoints, deck, POINTS_HTML, DIV_PLAYER_CARDS  })
        computerPoints = accumulatePoints(CARD, playerPoints.length - 1, playerPoints, POINTS_HTML);

        createCard(CARD, playerPoints.length - 1, DIV_PLAYER_CARDS);

        if (minimumPoints > 21) {
            break;
        }

    } while ((computerPoints < minimumPoints) && (minimumPoints <= 21));

    determineWinner( playerPoints );
}