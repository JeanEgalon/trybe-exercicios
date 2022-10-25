let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorValor = 0;

for (let contador = 0; contador < numbers.length; contador += 1) {
    if (maiorValor < numbers[contador]) {
        maiorValor = numbers[contador];
    }
}

console.log(maiorValor);
