let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for (let contador = 0; contador < numbers.length; contador += 1) {
    soma += numbers[contador];
}

console.log("O resultado da soma é: " + soma);
