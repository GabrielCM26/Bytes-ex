function garanteComprimentoDaString(string, n) {
    if (string.length > n){
        return string.slice(0, n) 
    }
    else if(string.length < n) {
        return string.padEnd(n, " ");
    }
    else {
        return string
    }
}

console.log(garanteComprimentoDaString("abcd", 3));
console.log(garanteComprimentoDaString("abcd", 5));
console.log(garanteComprimentoDaString("abcd", 4));