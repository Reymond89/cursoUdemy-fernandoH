import _ from 'underscore';


// esta funcion crea una nueva baraja
export const crearDeck = ( tiposDeCarta, tiposEspeciales ) => {

    for ( let i = 2; i <= 10; i++ ){
        for(let tipo of tiposDeCarta){
            deck.push(i + tipo);
        }
    }
    for(let tipo of tiposDeCarta){
        for(let esp of tiposEspeciales){
            deck.push(esp + tipo);
        }
    }
    // console.log(deck);
    deck = _.shuffle(deck);
 
    return deck;

}