class MaquinaDeCafe {
    constructor(custoDoCafe, capacidadeDepositoBorra, borraAtual, centimosParaTroco, centimosParaRecolha, dosesDeCafe) {
    this.custoDoCafe = 0.90,
    this.capacidadeDepositoBorra = 5,
    this.borraAtual = borraAtual
    this.centimosParaTroco = centimosParaTroco
    this.centimosParaRecolha = centimosParaRecolha
    this.dosesDeCafe = dosesDeCafe
    }

    fazCafe(saldo) {
        if(this.borraAtual >= this.capacidadeDepositoBorra) {
            return "Deposito de borra cheio"
        }
        if(this.dosesDeCafe = 0) {
            return "Sem doses de cafe"
        }
        if(saldo < this.custoDoCafe) {
            return "o café custa 0.90"
        }
    }

    devolveTroco() {
        return saldo - this.custoDoCafe
    }

    
}
