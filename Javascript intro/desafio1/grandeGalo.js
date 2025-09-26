class JogoDoGalo {
    constructor(tabuleiro = null, jogadorAtual = "X") {
        this.tabuleiro = tabuleiro || [
            ["_", "_", "_"],
            ["_", "_", "_"],
            ["_", "_", "_"]
        ];
        this.jogadorAtual = jogadorAtual;
    }

    adicionarJogada(linha, coluna) {
        if (this.tabuleiro[linha][coluna] !== "_") {
            console.log("Posição já ocupada.");
            return this; 
        }

        
        const novoTabuleiro = this.tabuleiro.map(row => [...row]);
        novoTabuleiro[linha][coluna] = this.jogadorAtual;
        const proximoJogador = this.jogadorAtual === "X" ? "O" : "X";

        return new JogoDoGalo(novoTabuleiro, proximoJogador);

    }

    obterJogadasPossíveis() {
        const jogadas = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.tabuleiro[i][j] === "_") {
                    jogadas.push({ linha: i, coluna: j });
                }
            }
        }
        return jogadas;
    }

    verificarVencedor() {
        const linhas = this.tabuleiro;

        // Linhas
        for (let i = 0; i < 3; i++) {
            if (linhas[i][0] !== "_" && linhas[i][0] === linhas[i][1] && linhas[i][1] === linhas[i][2]) {
                return linhas[i][0];
            }
        }

        // Colunas
        for (let j = 0; j < 3; j++) {
            if (linhas[0][j] !== "_" && linhas[0][j] === linhas[1][j] && linhas[1][j] === linhas[2][j]) {
                return linhas[0][j];
            }
        }

        // Diagonais
        if (linhas[0][0] !== "_" && linhas[0][0] === linhas[1][1] && linhas[1][1] === linhas[2][2]) {
            return linhas[0][0];
        }
        if (linhas[0][2] !== "_" && linhas[0][2] === linhas[1][1] && linhas[1][1] === linhas[2][0]) {
            return linhas[0][2];
        }

        return undefined;
    }

    verificarFimDoJogo() {
        return this.verificarVencedor() !== undefined || this.obterJogadasPossíveis().length === 0;
    }
}

//Testes
let jogo = new grandeGalo();
jogo = jogo.adicionarJogada(1,2)
console.log(jogo.tabuleiro);

jogo = jogo.adicionarJogada(2,2)
console.log(jogo.tabuleiro);

console.log(jogo.verificarFimDoJogo())
console.log(jogo.verificarVencedor())