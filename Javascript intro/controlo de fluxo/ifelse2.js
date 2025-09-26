function calculaCassificacaoEtaria(idade){
    if (idade >= 0 && idade <= 1) {
        return "Lactente"
    }
    else if (idade >= 2 && idade <= 4) {
        return "Pré-escolar"
    }
    else if (idade >= 5 && idade <= 10) {
        return "Escolar"
    }
    else if (idade >= 11 && idade <= 17) {
        return "Adolescente"
    }
}

console.log(calculaCassificacaoEtaria(4))