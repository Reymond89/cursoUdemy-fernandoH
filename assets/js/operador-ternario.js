
// Dias de semana abrimos a las 11,
// pero los fines de semana abrimos a las 9

// entra a un sitio webkitURL, para consultar si esta abierto hoy...


let diaEntreSemana = 11;
let finesSemana = 9;
// const dia = 0;
const hora = 7;


// if (hora >= diaEntreSemana ){
//     console.log('esta abieto');
// }else{
//     console.log('esta cerrado')
// }

// if (hora >= finesSemana){
//     console.log('esta abierto es fin de semana')
// }else{
//     console.log('se encuentra cerrado')
// }

let dia = 1 // 0: domingo, 1: lunes...
const horaActual = 9;

let horaApertura;
let mensajes; // esta abierto, Esta cerrado, hoy abrimos a las xx

// if (dia === 0 || dia === 6){
// if ([0,6].includes(dia)){ // otra forma de hacerlo
//     console.log('es Fin de semana');
//     horaApertura = 9;
// }else{
//     console.log('Dia entre semana');
//     horaApertura = 11;
// }

horaApertura = ( [0,6].includes(dia)) ? '9' : '11';

// if (horaActual >= horaApertura){
//     mensajes = 'esta abierto';
// }else{
//     mensajes = `esta cerrado, hoy abrimos a las ${horaApertura}`;
// }
mensajes = ( horaActual >= horaApertura ) ? 'esta abierto' : 'esta cerrado';

console.log({horaApertura, mensajes});
