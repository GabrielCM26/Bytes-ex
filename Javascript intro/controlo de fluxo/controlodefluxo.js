function escadaComCardinais(n){
    let cardinais = ""

    for(let i = 0; i < n; i++){
        cardinais += "#"
    }
    for(let i = n - 1; i > 0; i--){
        cardinais = cardinais.slice(0, -1)
        console.log(cardinais);
    }
}

console.log(escadaComCardinais(6))