// escreva sum abaixo
const soma = (...numeros) => numeros.reduce((acc, valor) => acc + valor, 0);

console.log(soma(0, 1, 2, 3, 4, 5, 6));