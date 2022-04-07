// 1 - Crie uma função que retorne a string 'Acordando!!' ;
const wakeUp = () => 'Acordando!!';
// console.log(wakeUp());

// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
const drinkCafe = () => 'Bora tomar café!!';
// console.log(drinkCafe());

// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
const goSleep = () => 'Partiu dormir!!';
// console.log(goSleep());

// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o 
// resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:
// Ao chamar a função doingThings:
const doingThings = (func) => func();
console.log(doingThings(goSleep));

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!