function escadaComCardinais(n) {
    for (let i = 1; i <= n; i++) {
        let espacos = " ".repeat(n - i);
        let cardinais = "#".repeat(i);
        console.log(espacos + cardinais);
    }
}
console.log(escadaComCardinais(6))