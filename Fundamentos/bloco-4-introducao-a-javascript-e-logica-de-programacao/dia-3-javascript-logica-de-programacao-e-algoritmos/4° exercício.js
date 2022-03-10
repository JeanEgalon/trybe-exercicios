// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50


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