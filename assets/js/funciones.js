
function saludar(nombre) {
    // console.log(arguments);
    // console.log('Hola ' + nombre);
    return [1, 2];


    console.log('soy un codigo que esta despues del return')
};

const saludar2 = function(nombre) {
    console.log('Hola ' + nombre);
};

// funcion de flecha anonima 

const saludarFlecha = () => {
    console.log('hola flecha')
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola ' + nombre);
}


const retornoDeSaludar = saludar('reymond', 40, true, 'Costa Rica');
// console.log(retornoDeSaludar[0], retornoDeSaludar[1]);

// saludar2('Maria');
// saludarFlecha();
// saludarFlecha2('Melisa');

function sumar(a, b){
    return a + b;
}

const sumar2 = (a, b) => {
    return a + b;
}

// forma resumida cuando hay una sola operacion se elimina llaves y return
const sumar3 = (a, b) => a + b;


// console.log(sumar(2,4));
// console.log(sumar2(2,2));
// console.log(sumar3(2,6));

function getAleatorio(){
    return Math.random();
}

// console.log(getAleatorio());

const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());

