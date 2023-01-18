

class Rectangulo{

    #area = 0;

    constructor(base = 0, altura = 0){
        this.base   = base;
        this.altura = altura;

        this.#area = base*altura;
    }

    calcularArea2(){
        console.log(this.#area * 2);
    }

}
const calcularArea = new Rectangulo(3,2);
// calcularArea.#area = 100; metodo privado no esta pemitido
console.log(calcularArea);


calcularArea.calcularArea2();