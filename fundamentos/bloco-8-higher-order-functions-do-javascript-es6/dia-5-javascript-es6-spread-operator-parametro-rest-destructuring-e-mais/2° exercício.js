// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

// escreva sum abaixo
const soma = (...numeros) => numeros.reduce((acc, valor) => acc + valor, 0);

console.log(soma(0, 1, 2, 3, 4, 5, 6));