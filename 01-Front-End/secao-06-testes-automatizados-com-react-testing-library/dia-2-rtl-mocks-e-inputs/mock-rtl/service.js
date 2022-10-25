const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
};

// Desenvolva a primeira função: essa função deve recebe uma string e retorná - la em caixa alta.
const upperString = (string) => {
  return string.toUpperCase()
};
// Crie a segunda função: ela recebe uma string e deve retornar só a primeira letra.
const firstLetter = (string) => {
  return string[0]
};
// Elabore a terceira função: essa função deve receber duas strings e concatená - las.

const concatStrings = (firstString, secondString) => {
  return firstString + secondString
};

const doguinho = () => {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response
      .json()
      .then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
}

module.exports = { randomNumber, upperString, firstLetter, concatStrings, doguinho }