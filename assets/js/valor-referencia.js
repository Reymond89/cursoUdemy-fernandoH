
let a = 10;
let b = a;
a = 30;

console.log({a, b});


let juan = {nombre: 'juan'};
let ana  = {...juan};
ana.nombre = 'Ana';

console.log({juan, ana});

const cambiaNombre = ( {...persona} ) => {
    persona.nombre = 'Tony'
    return persona;
}

let peter = { nombre: 'peter' };
let tony = cambiaNombre (peter);

console.log({peter, tony});

// Arreglos

const frutas = ['Manzana', 'Pera', 'Piña'];

// se usa spread se agregan los 3 puntos y separa los arreglos
// const otrasFrutas = [...frutas];
console.time('spread');
const otrasFrutas = [...frutas];
console.timeEnd('spread');

console.time('slice');
const otrasFrutas2 = frutas.slice();
console.timeEnd('slice');

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});