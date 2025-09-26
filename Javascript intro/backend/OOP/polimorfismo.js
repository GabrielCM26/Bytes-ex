/*class Porta {
    constructor(){
        this.trinco = false
    }

    trancar(){
        this.trinco = true
    }

    destrancar(){
        this.trinco = false
    }

    status(){
        return this.trinco
    }
}

class PortaBlindada extends Porta {
    constructor() {
        super(false)
        this.trincoSuperior = false
        this.trincoInferior = false
        this.trincoTraseiro = false
    }

    trancar() {
        super.trancar
        this.trincoSuperior = true
        this.trincoInferior = true
        this.trincoTraseiro = true
    }

    destrancar() {
        super.destrancar
        this.trincoSuperior = false
        this.trincoInferior = false
        this.trincoTraseiro = false
    }

    status() {
        const trancada = this.trincoSuperior && this.trincoInferior && this.trincoTraseiro;
        return trancada ? "Porta blindada trancada" : "Porta blindada destrancada";
    }
}

const porta = new Porta();
console.log(porta.status()); 
porta.trancar();
console.log(porta.status()); 

const blindada = new PortaBlindada();
console.log(blindada.status()); 
blindada.trancar();
console.log(blindada.status()); */

class Rectangulo {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    calculaArea() {
        return this.altura * this.largura;
    }
}


class Quadrado extends Rectangulo {
    constructor(lado) {
        super(lado, lado); 
    }
}

// Teste
const retangulo = new Rectangulo(5, 10);
console.log("Área do retângulo:", retangulo.calculaArea()); 

const quadrado = new Quadrado(4);
console.log("Área do quadrado:", quadrado.calculaArea()); 