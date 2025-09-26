let calculadora = {
  historico: [],
  ultimoResultado: 0,

  calcular(a, b, operador) {
    if (b === undefined) {
      b = a;
      a = this.ultimoResultado;
    }

    let resultado;
    switch (operador) {
      case "+": resultado = a + b; break;
      case "-": resultado = a - b; break;
      case "*": resultado = a * b; break;
      case "/": resultado = a / b; break;
      default: throw new Error("Operador inválido");
    }

    this.historico.push(`${a} ${operador} ${b} = ${resultado}`);
    this.ultimoResultado = resultado;
    return this;
  },

  somar(a, b) {
    return this.calcular(a, b, "+");
  },
  subtrair(a, b) {
    return this.calcular(a, b, "-");
  },
  multiplicar(a, b) {
    return this.calcular(a, b, "*");
  },
  dividir(a, b) {
    return this.calcular(a, b, "/");
  },

  limparHistorico() {
    this.historico = [];
    this.ultimoResultado = 0;
    return this;
  },

  obterResultado() {
    return BigInt(this.ultimoResultado);
  },

  toJSON() {
    return JSON.stringify({
        historico: this.historico,
        ultimoResultado: this.ultimoResultado.toString()
    });
  },

  toString() {
    if (this.historico.length === 0) {
      return "Calculadora Limpa";
    } else {
      let historicoString = "=== Histórico da Calculadora ===\n";
      this.historico.forEach((op, i) => {
        historicoString += (i + 1) + ". " + op + "\n";
      });
      historicoString += "=== Fim do Histórico ===\n";
      historicoString += `Foram realizadas ${this.historico.length} operações\n`;
      historicoString += `Último Resultado: ${this.ultimoResultado}`;
      return historicoString;
    }
  }
};

calculadora.somar(2, 3);
calculadora.somar(5);
calculadora.multiplicar(2); 
console.log(calculadora.toString());
console.log(calculadora.toJSON());
console.log(calculadora.obterResultado())
console.log(calculadora.limparHistorico())

