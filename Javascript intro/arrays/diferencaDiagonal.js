function diferencaDiagonal(matriz) {
    let sum1= 0;
    let sum2 = 0;
    const n = matriz.length;

    for(let i = 0; i < n; i++){
        sum1 += matriz[i][i]
        sum2 += matriz[i][n - 1 - i]
    }
    return Math.abs(sum1 - sum2);
}

const matriz = [
    [9,2,3],
    [1,3,2],
    [3,2,1]
]
console.log(diferencaDiagonal(matriz))