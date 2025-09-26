function aplica(numero, func) {
    return func(numero);
}

console.log(aplica(5, (n) => n * n))
console.log(aplica(5, (n) => n * -1))
console.log(aplica(5, (n) => n % 2 === 0 ? "Par" : "Ímpar"))