/**
 * 2C = two of clubs
 * 2D = two of Diaminds
 * 2H = Two of Hearts
 * 2S = Two of Speades 

*/

let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
let puntosComputadora = 0;

// Referencias HTML

const btnPedir = document.querySelector('#btnPedir');

const divCartasJugador = document.querySelector('#jugador-cartas');

const puntosHtml = document.querySelectorAll('small');
 
// esta funcion crea una nueva baraja
const crearDeck = () => {

    for ( let i = 2; i <= 10; i++ ){
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }
    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push(esp + tipo)
        }
    }
    // console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);

}
crearDeck();

// esta funcion me permite tomar una carta
let pedirCarta = () => {

    if ( deck.length === 0 ){
        throw 'no hay mas cartas en el deck'
    }

    const carta = deck.pop();
    // console.log(deck);
    // // console.log(deck.pop());
    // // return carta;
    // console.log(carta);
    return carta;
}

// pedirCarta();

const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length -1);

    return (isNaN( valor )) ? 
            ( valor === 'A' ) ? 11 : 10
        :   ( parseInt(valor));
        
}
// const valor = valorCarta(pedirCarta());
// console.log({valor});

const turnoComputadora = () => {




}




// Eventos 

btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();
    
    puntosJugador = puntosJugador + valorCarta(carta);
    console.log(puntosJugador);
    puntosHtml[0].innerText = puntosJugador
    // document.querySelector('small').innerHTML = puntosJugador

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);
    
    if (puntosJugador > 21){
        alert('Has perdido');
        btnPedir.disabled = true;
    }else if( puntosJugador === 21 ){
        alert('21, Has Ganado!!!!');
        btnPedir.disabled = true;
    }

});










