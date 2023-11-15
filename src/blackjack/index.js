import _ from 'underscore';
// import createDeck from './usescases/create-deck';

import { accumulatePoints, createCard, createDeck, desactivateGame, orderCard, turnComputer } 
from './usescases';

/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */

// utilizamos el patrón modulo 
(() => {

    'use strict'

    // Declaramos un array vacío llamado 'deck'
    let deck = [],
        puntosJugadores = [];

        // Referencias del HTML
    const BTNPEDIR = document.querySelector('#btnPedir'),
        BTN_DETENER = document.querySelector('#btnDetener'),
        BTN_NUEVO = document.querySelector('#btnNuevo'),

        DIV_PLAYER_CARDS = document.querySelectorAll('.divCartas'),

        POINTS_HTML = document.querySelectorAll('small');

    // Está función inicializa el juego
   const INICILIZAR_JUEGO = (numJugadores = 2) => {
        console.clear();
        deck = createDeck();

        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        POINTS_HTML.forEach(elem => elem.innerText = 0);
        DIV_PLAYER_CARDS.forEach(elem => elem.innerHTML = '');

        BTNPEDIR.disabled = BTN_DETENER.disabled = false;

    } 


    // Eventos
    BTNPEDIR.addEventListener('click', () => {

        const CARD          = orderCard( deck ),
              PLAYER_POINTS = accumulatePoints(CARD, 0, puntosJugadores, POINTS_HTML);

        createCard(CARD, 0, DIV_PLAYER_CARDS);


        if (PLAYER_POINTS > 21) {

            desactivateGame(BTN_DETENER, BTNPEDIR);
            console.warn('Perdiste');
            turnComputer(puntosJugadores[0], puntosJugadores, deck, POINTS_HTML, DIV_PLAYER_CARDS);

        } else if (PLAYER_POINTS === 21) {

            desactivateGame(BTN_DETENER, BTNPEDIR);
            console.warn('21, ¡Genial!');
            turnComputer(PLAYER_POINTS);

        };
    });

    BTN_DETENER.addEventListener('click', () => {
        desactivateGame(BTN_DETENER, BTNPEDIR);

        turnComputer(puntosJugadores[0], puntosJugadores, deck, POINTS_HTML, DIV_PLAYER_CARDS);
    });

    BTN_NUEVO.addEventListener('click', () => {

        INICILIZAR_JUEGO();

    });

    // El patrón modulo debe regresar y hacer publico algo
    return {
        nuevoJuego: INICILIZAR_JUEGO
    }
})();