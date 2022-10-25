// sum.test.js
const sum = require("./sum");

test("Checa se a soma de 4 e 5 é 9", () => {
  expect(sum(4, 5)).toBe(9);
});

test("Checa se a soma de 0 e 0 é 0", () => {
  expect(sum(0, 0)).toBe(0); //no gabarito essa linha ficou abaixo da linha 5 e a descrição da linha 4 foi alterada para descrever ambas, como ex 'testa a função sum'
});

test("Checa se retorna a seguinte mensagem de erro: parameters must be numbers", () => {
  expect(() => sum(4, '5')).toThrow(("parameters must be numbers"));
});
