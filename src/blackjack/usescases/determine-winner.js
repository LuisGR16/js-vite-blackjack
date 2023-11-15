export const determineWinner = ( playerPoints ) => {

    const [minimumPoints, pointsComputer] = playerPoints;

    setTimeout(() => {
        if (pointsComputer === minimumPoints) {
            alert('Nadie gana');
        } else if (minimumPoints > 21) {
            alert('Computadora gana');
        } else if (pointsComputer > 21) {
            alert('Jugador Gana');
        } else if (minimumPoints < pointsComputer) {
            alert('Computadora gana');
        }
    }, 150);
}