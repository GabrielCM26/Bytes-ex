function minMax(array, n){

const minarr = [...array].sort((a, b) => a - b);
const maxarr = [...array].sort((a, b) => b - a);

const minsliced = minarr.slice(0, n);
const maxsliced = maxarr.slice(0, n);

const minsum = minsliced.reduce((acc, num) => acc + num, 0)
const maxsum = maxsliced.reduce((acc, num) => acc + num, 0)

return [minsum, maxsum]
}

const array = [1, 2, 3, 4, 5]
console.log(minMax(array, 4))