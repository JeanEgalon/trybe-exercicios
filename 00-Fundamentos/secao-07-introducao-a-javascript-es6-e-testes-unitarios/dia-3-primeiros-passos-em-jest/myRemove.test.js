const myRemove = require("./myRemove");

describe('A função myRemove', () => {

  test('Recebe um array e remove o item do parametro', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('Recebe um array e e não retorna ele mesmo', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('Recebe um array e remove o item do parametro caso ele exista no array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

});
