// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let media = numbers.length;
let soma = 0;

for (let contador = 0; contador < numbers.length; contador += 1) {
    soma += numbers[contador];
}

console.log("A média é: " + soma / media);