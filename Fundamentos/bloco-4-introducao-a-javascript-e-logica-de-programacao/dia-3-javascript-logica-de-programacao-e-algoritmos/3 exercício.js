let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let contador = 0; contador < array.length; contador += 1) {
    if (array[contador].length > maiorPalavra.length) {
        maiorPalavra = array[contador];
    }
}

for (let contador2 = 0; contador2 < array.length; contador2 += 1) {
    if (array[contador2].length < menorPalavra.length) {
        menorPalavra = array[contador2]
    }
}

console.log(maiorPalavra);
console.log(menorPalavra);
