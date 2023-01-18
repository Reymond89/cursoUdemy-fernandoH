
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

class Hero extends Persona{

    clan = 'sin clan';

    constructor(nombre, codigo, frase){
        super( nombre, codigo, frase );

        this.clan = 'Avengers';
    }

    poderSecreto(){
      
        console.log(`soy ${this.nombre}, ${this.clan}`);

        super.poderSecreto();
      
    }

    
}

const spiderman = new Hero('Peter Parkar', 'Spiderman', 'Yo soy tu amigable vecino');

// const spiderman = new Hero();
console.log(spiderman);
spiderman.poderSecreto();


class Villano extends Hero {

    maldad = 'Thanos';

    constructor(nombre, codigo, frase){
        
        super(nombre, codigo, frase);
    }

    poderSecreto(){
        super.poderSecreto();
    }

}
console.log('____________________');
const maldad = new Villano('Thanos', 'dominar a todos');
console.log(maldad);
// maldad.poderSecreto();