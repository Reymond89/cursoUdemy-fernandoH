let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('largo:', juegos.length);

let primero = juegos[ 2 - 2 ];
let ultimo  = juegos[ juegos.length - 1 ];

console.log(primero, ultimo);

juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr})
} );

// agrega un elemento al final del array
let nuevaLongitud = juegos.push('F-Zero' );
console.log({nuevaLongitud, juegos});

// inserta un nuevo elemento al inicio
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos});

// elimina el ultimo
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

let posicion = 2;
console.log(juegos);

// inicia posicion 2, elimina la cantidad q colocamos despues en
// este caso 2 item 
// let borrarJuegos = juegos.splice(posicion, 2);
// console.log({borrarJuegos, juegos});

// saber la posicion de un elemento dentro del array

let metroidIndex = juegos.indexOf('Metroid'); //case sensitive 
console.log({metroidIndex});
