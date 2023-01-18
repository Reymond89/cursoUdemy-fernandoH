
const elMayor = ( a, b ) => ( a > b ) ? a : b;
console.log(elMayor(8,7));


const esMiembro = (miembro) => (miembro) ? '5 dolares' : '10 dolares';
console.log(esMiembro(true));

const amigo = false;
const amigosArr = [
    'peter',
    'tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'loki',
    elMayor(10,30)
];

console.log(amigosArr);


const nota = 100;


const grado = nota >= 100 ? 'AAA, eres el mejor estudiante':
              nota >= 95 ? 'A+':
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C' : 'F';

console.log(`tu nota es: ${nota}`, `y pasaste el año con: ${grado}`);