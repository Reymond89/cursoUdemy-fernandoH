

class Persona{

    static nuevoObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais);
    }

    constructor( nombre, apellido, pais ){

        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais
    }

    getInfo(){
        console.log(`Info: Mi nombre es ${this.nombre} ${this.apellido} mi pais de origen es ${this.pais}`);
    }

}

const hija = {
    nombre: 'Evangeline',
    apellido: 'caceres',
    pais: 'venezuela'

}

const persona1 = new Persona('reymond', 'Caceres', 'Venezuela');
console.log(persona1);

const persona2 = new Persona(hija.nombre, hija.apellido, hija.pais); // forma tradicional
console.log(persona2);

persona1.getInfo();
persona2.getInfo();


// const persona2 = Persona.nuevoObjeto(hija); // constructor multiple usando static.
// console.log(persona2);
