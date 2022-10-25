const { test } = require('@jest/globals');
const service = require('./service');

describe('Exercício 1', () => {
  test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
  
    service.randomNumber();
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveReturnedWith(10);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  
  });
})

describe('Exercício 2', () => {
  test('Com mock, crie uma nova implementação, que receba dois parâmetros e retorna a divisão do primeiro pelo segundo.Essa implementação deve ocorrer uma única vez', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
  
    expect(service.randomNumber(2, 2)).toBe(1);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2, 2);
  });
})

describe('Exercício 3', () => {
  test('Altere a implementação da função fazendo com que ela receba 3 parâmetros e retorne: a multiplicação de todos os parâmetros', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
  
    expect(service.randomNumber(2, 2, 2)).toBe(8);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2, 2, 2);
  });

  test('Resete qualquer implementação anterior e crie uma nova, que receba um parâmetro e retorne o seu dobro', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a) => a * 2);

    expect(service.randomNumber(2)).toBe(4);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(2);
  })
})

describe('Exercício 4', () => {
//Faça o mock das funções para com os seguintes casos:
  test('Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa', () => {
    service.upperString = jest.fn().mockImplementationOnce((a) => a.toLowerCase());

    expect(service.upperString('OI')).toBe('oi');
    expect(service.upperString).toHaveBeenCalled();
    expect(service.upperString).toHaveBeenCalledTimes(1);
    expect(service.upperString).toHaveBeenCalledWith('OI');
  })

  test('Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string', () => {
    service.firstLetter = jest.fn().mockImplementationOnce((string) => string[string.length - 1]);

    expect(service.firstLetter('caramba')).toBe('a');
    expect(service.firstLetter).toHaveBeenCalled();
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
    expect(service.firstLetter).toHaveBeenCalledWith('caramba');
  })

  test('Implemente, na terceira função: ela deve receber três strings e concatená - las.', () => {
    service.concatStrings = jest.fn().mockImplementationOnce((a, b, c) => a + b + c);

    expect(service.concatStrings('casa', 'men', 'to')).toBe('casamento');
    expect(service.concatStrings).toHaveBeenCalled();
    expect(service.concatStrings).toHaveBeenCalledTimes(1);
    expect(service.concatStrings).toHaveBeenCalledWith('casa', 'men', 'to');
  })
})

describe("Exercício 5", () => {
  service.doguinho = jest.fn();
  afterEach(service.doguinho.mockReset);

  test("testando requisição caso a promise resolva", async () => {
    service.doguinho.mockResolvedValue("request success");

    service.doguinho();
    expect(service.doguinho).toHaveBeenCalled();
    expect(service.doguinho).toHaveBeenCalledTimes(1);
    await expect(service.doguinho()).resolves.toBe("request success");
    expect(service.doguinho).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promise seja rejeitada", async () => {
    service.doguinho.mockRejectedValue("request failed");

    expect(service.doguinho).toHaveBeenCalledTimes(0);
    await expect(service.doguinho()).rejects.toMatch("request failed");
    expect(service.doguinho).toHaveBeenCalledTimes(1);
  });
});