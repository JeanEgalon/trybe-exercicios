// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Utilizando for , descubra qual o menor valor contido no array e imprima-o

let menorValor = numbers[0];

for (let contador = 0; contador < numbers.length; contador += 1) {
    if (menorValor > numbers[contador]) {
        menorValor = numbers[contador];
    }
}

console.log(menorValor);