function superDigito(n) {
    if (n.length === 1) {
        return Number(n);
    }
    const digitos = n.split('');
    let soma = 0
    for (let i = 0; i < digitos.length; i++) {
        soma += Number(digitos[i]);
    }

    return superDigito(soma.toString());
}

console.log(superDigito("9875"))