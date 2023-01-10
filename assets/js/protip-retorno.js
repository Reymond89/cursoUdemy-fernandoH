

function crearPersona(nombre, apellido){
    return {
        nombre: nombre,
        apellido: apellido
    }
}

const persona = crearPersona('Reymond', 'caceres');
// console.log(persona);

const crearPersona2 = (nombre, apellido) => ({nombre,apellido});
console.log(crearPersona2('Reymond', 'Caceres'));

const imprimeArgumentos2 = (edad, ...args) => {
    // console.log({edad, args});
    return args;
} 

const [casado, vivo, nombre, saludos] = imprimeArgumentos2(10, true, false, 'reymond', 'hola');
// console.log({casado, vivo, nombre, saludos});

const {apellido: nuevoApellido} = crearPersona('Reymond', 'caceres');
console.log({nuevoApellido});

const tony = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'hulkbuster'],
   
};

const imprimePropiedades = ({nombre, codeName, vivo, edad, trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

// console.log(tony);

imprimePropiedades(tony);

// const imprimeTodo = Object.values(tony);
// console.log({imprimeTodo});
