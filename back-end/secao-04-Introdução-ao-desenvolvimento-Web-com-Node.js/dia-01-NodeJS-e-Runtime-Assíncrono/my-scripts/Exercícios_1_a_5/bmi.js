const readline = require('readline-sync');


//peso
const weight = readline.questionFloat('What’ your weight? ');

//altura
const height = readline.questionFloat('What’ your height? ');

const body = weight / height ^ 2;


if (body < 18.5) {
  console.log(`O seu ICM é: ${body} e você está abaixo do peso (magreza)`);
}
if (body > 18.5 && body < 24.9) {
  console.log(`O seu ICM é: ${body} e você está com peso normal`);
}
if (body > 25.0 && body < 29.9) {
  console.log(`O seu ICM é: ${body} e você está acima do peso (sobrepeso)`);
}
if (body > 30.0 && body < 34.9) {
  console.log(`O seu ICM é: ${body} e você está com obesidade grau I`);
}
if (body > 35.0 && body < 39.9) {
  console.log(`O seu ICM é: ${body} e você está com obesidade grau II`);
}
if (body > 40.0) {
  console.log(`O seu ICM é: ${body} e você está com obesidade graus III e IV`);
}