// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

let a = 2;
let b = 5;

function maiorMenor(a, b) {
    if (a > b) {
        return a + ' é maior que ' + b;
    }
    else if (b > a) {
        return b + ' é maior que ' + a;
    }
    return "valores iguais";
}

console.log(maiorMenor(a, b));