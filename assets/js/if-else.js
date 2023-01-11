

let a = 10;

if ( a >= 10 ){ 
    console.log('A es mayor o igual a 10');
}else{
    console.log('A es menor que 10');
}

// console.log('Fin de programa');

const hoy = new Date(); // {}
// console.log(hoy);

// let dia = hoy.getDay();
// console.log({dia});


// if ( dia === 0 ){
//     console.log('Domingo');
// }else{
//     console.log('No es Domingo');
// }
// dia = 3;


// let dia = prompt('Ingrese el numero de la semana que deseas consultar');
// console.log(typeof dia);


// if ( dia == 0 ){
//     console.log('Domingo');
// }else if( dia === 1 ){
//     console.log('Lunes');
// }else if( dia === 2 ){
//     console.log('Martes');
// }else if( dia === 3 ){
//     console.log('Miercoles');
// }else if( dia === 4 ){
//     console.log('Jueves');
// }else if( dia === 5 ){
//     console.log('viernes');
// }else if( dia === 6 ){
//     console.log('Sabado');
// }
// console.log('Programa terminado');

hola = 0;

const posicionDeJuego = "juego";

let diaSeleciconado = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado',
    "juego" : 'mario'
}
// console.log(`Bienvenido al juego de: ${diaSeleciconado[hola]}`);
// console.log(diaSeleciconado[posicionDeJuego]);

// diaSeleciconado = Object.values(dia);
// console.log('El dia seleccionado es: ', diaSeleciconado);

let diaSeleciconado2 = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];

console.log(diaSeleciconado2[hola]);