

class Persona {

    static _conteo = 0;
    get conteo(){
        return Persona._conteo + 'instancias';
    }

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){

        this.nombre = nombre,
        this.codigo = codigo,
        this.frase  = frase

        Persona._conteo++;
    }

    set setComida( comida ){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `la comida favorita de ${this.nombre} , ${this.comida}`;
    }

    poderSecreto(){
        console.log(`mi nombres es ${this.nombre} y mi codigo es ${this.codigo}, mi frase ${this.frase}`)
    }
    miFrase(){
        this.poderSecreto();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

}

// const spiderman = new Persona('jose', 'Cheo', 'hola');
// console.log(spiderman);
const ironman = new Persona('Tony Stark', 'iron man', 'Yo soy iron Man');
// console.log(ironman);s
// ironman.poderSecreto();

ironman.setComida = 'Es el pai de cereza de la tia May';
ironman.setComida = 'Arroz con Pollo';
console.log(ironman);
console.log(ironman.getComidaFavorita);
console.log(Persona._conteo);



















class Prueba{
    nombre;
    apellido;
    edad;
    constructor(nombre = 'sin nombre', apellido = 'sin apellido', edad = 'sin edad'){
        console.log('hola mundo');
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad
    }

    quienSoy(){
        console.log(`soy ${this.nombre}, mi apellido es ${this.apellido} y tengo ${this.edad} años.`);
    }
}
// const reymond = new Prueba('Reymond', 'Caceres', 33);
// console.log(reymond);
// reymond.quienSoy();