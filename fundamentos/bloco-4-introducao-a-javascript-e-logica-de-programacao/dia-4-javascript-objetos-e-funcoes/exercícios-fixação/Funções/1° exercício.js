// Faça cinco programas, um para cada operação aritmética básica. 
// Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

let a = 2;
let b = 2;

function adicao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

function modulo(a, b) {
    return a % b;
}

console.log("Adição:", adicao(a, b));
console.log("Subtração:", subtracao(a, b));
console.log("Multiplicação:", multiplicacao(a, b));
console.log("Divisão:", divisao(a, b));
