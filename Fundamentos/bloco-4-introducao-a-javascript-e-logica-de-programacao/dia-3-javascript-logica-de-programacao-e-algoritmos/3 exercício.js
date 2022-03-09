// 3- Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

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