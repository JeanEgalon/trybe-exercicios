// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"

let numeroImpar = 0;

for (let contador = 0; contador < numbers.length; contador += 1) {
    if (numbers[contador] % 2 !== 0) {
        numeroImpar += 1;
    }
}

if (numeroImpar === 0) {
    console.log ("nenhum valor ímpar encontrado");
}
else {
    console.log(numeroImpar);
}
