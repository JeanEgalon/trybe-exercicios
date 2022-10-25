let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let media = numbers.length;
let soma = 0;

for (let contador = 0; contador < numbers.length; contador += 1) {
    soma += numbers[contador];
}

console.log("A média é: " + soma / media);
