// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Utilizando for , descubra qual o maior valor contido no array e imprima-o

let maiorValor = 0;

for (let contador = 0; contador < numbers.length; contador += 1) {
    if (maiorValor < numbers[contador]) {
        maiorValor = numbers[contador];
    }
}

console.log(maiorValor);