let maiorNumeroPrimo = 0;

for (let primeiroNumeroQueSeraComparado = 0; primeiroNumeroQueSeraComparado <= 50; primeiroNumeroQueSeraComparado += 1) {
    let numeroPrimo = true;
    for (let divisor = 2; divisor < primeiroNumeroQueSeraComparado; divisor += 1) {
        if (primeiroNumeroQueSeraComparado % divisor === 0) {
            numeroPrimo = false;
        }
    }
    if (numeroPrimo) {
        maiorNumeroPrimo = primeiroNumeroQueSeraComparado;
    }
}

console.log("O maior numero primo é " + maiorNumeroPrimo)
