let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

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
