class SoInteiro {
    #inteiro = 0;

    get inteiro() {
        return this.#inteiro;
    }

    set inteiro(valor) {
        if(Number.isInteger(valor)){
            this.#inteiro = valor;
        }
    }
}