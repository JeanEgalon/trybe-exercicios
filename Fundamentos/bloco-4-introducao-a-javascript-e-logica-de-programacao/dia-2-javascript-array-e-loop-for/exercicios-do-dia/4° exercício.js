// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, 
// imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"

let qntNumeros = numbers.length;
let soma = 0;

for (let contador = 0; contador < numbers.length; contador += 1) {
    soma += numbers[contador];
}

let media = soma / qntNumeros

if (media > 20) {
    console.log("valor maior que 20");
}
else {
    console.log("valor menor ou igual a 20")
}

console.log("A média é: " + media);