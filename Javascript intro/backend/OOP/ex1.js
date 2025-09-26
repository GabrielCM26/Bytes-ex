class inteiro {
    static n = 0
    
    static eInteiro(n) {
        return Number.isInteger(n)
    }
}

console.log(inteiro.eInteiro(5.9))
console.log(inteiro.eInteiro(5))