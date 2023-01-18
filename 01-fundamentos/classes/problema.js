

const fher = {
    nombre: 'reymond',
    edad: 30,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}
const pedro = {
    nombre: 'pedro',
    edad: 15,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}


fher.imprimir();

// ok esto se debe crear con la palabra new
function Persona(nombre, edad){
    console.log('se ejecuto esta linea');

    this.nombre = nombre,
    this.edad   = edad,
    this.imprimir = function (){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const reymond = new Persona('reymond', 33);
const melissa = new Persona('melissa', 13);
console.log(reymond);
console.log(melissa)