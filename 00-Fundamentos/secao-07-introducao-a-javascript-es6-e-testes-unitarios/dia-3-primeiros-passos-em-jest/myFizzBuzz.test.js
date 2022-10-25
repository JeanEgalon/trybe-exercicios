const myFizzBuzz = require("./myFizzBuzz");

describe("A função myFizzBuzz", () => {
  test("Recebe um número e checa se é divisível por 3 e/ou 5", () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(2)).toBe(2);
    expect(myFizzBuzz('oi')).toBe(false);
  });
});
