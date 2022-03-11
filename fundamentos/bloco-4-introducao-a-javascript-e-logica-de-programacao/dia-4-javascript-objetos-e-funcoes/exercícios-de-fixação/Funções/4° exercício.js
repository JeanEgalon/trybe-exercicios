// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const a = 0;

function valorDefinido(a) {
    if (a > 0) {
        return "positive";
    }
    else if (a < 0) {
        return "negative";
    }
    return "zero";
}

console.log(valorDefinido(a));