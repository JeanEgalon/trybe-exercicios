// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 5;
const b = 10;
const c = 10;

if (a > b && a > c) {
    console.log("a é o maior");
}
else if (b > a && b > c) {
    console.log("b é o maior");
}
else {
    console.log("c é o maior")
}