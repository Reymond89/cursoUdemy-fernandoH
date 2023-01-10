const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    coords: {
        lat:34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima-pelicula': 'Infinity War',
};

const x = 'vivo';
console.log('Esta vivo:', personaje[x]);


console.log(personaje);
console.log('nombre:', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Coordenadas', personaje.coords.lat);
console.log('Numero de trajes:', personaje.trajes.length);
console.log('Ultimo traje:', personaje.trajes[personaje.trajes.length -1]);
console.log('Ultima pelicula:', personaje["ultima-pelicula"]);

// mas detalles

// delete personaje.edad; profesor
// let eliminarEdad = delete personaje.edad; mi forma
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);



Object.freeze(personaje);

// congela las asiganciones nuevas al objeto principal 
// mas no a los demas objetos internos
personaje.dinero = 1000000;
personaje.casado = false;

personaje.direccion.ubicacion = 'Costa Rica'; // este es un ejm cambia el obj interno

Object.freeze(personaje.direccion); // congelar objeto dentro del obj princiapl
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje); // propiedades del objeto
const valores = Object.values(personaje); // valores del objeto
console.log(valores);


