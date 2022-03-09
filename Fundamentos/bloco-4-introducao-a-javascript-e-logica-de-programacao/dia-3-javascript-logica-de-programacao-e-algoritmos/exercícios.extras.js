// 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 50 é: X.

let soma = 0;

for (let contador = 0; contador <= 50; contador += 1) {
    soma = soma + contador;
    // console.log (soma);
}

console.log ("A soma de 1 a 50 é " + soma);

//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let conte = 0;

for (let contador = 2; contador <= 150; contador += 1) {
    if (contador % 3 === 0) {
        conte += 1;
    }
}

if (conte = 50) {
    console.log("mensagem secreta");
}

//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let player1 = "Tesoura";      //créditos ao Marco Botelho que explicou e fez o exercício para a turm, tmj!
let player2 = "Papel";

switch (player1){
    case "Tesoura":
        if(player2 === "Pedra"){
            console.log("Player 2 won");
        } else if (player2 === "Papel"){
            console.log("Player 1 won");
        } else {
            console.log("A tie");
        }
        break;
    case "Pedra":
        if(player2 === "Pedra"){
            console.log("A tie");
        } else if (player2 === "Papel"){
            console.log("Player 2 won");
        } else {
            console.log("Player 1 won");
        }
        break;

    case "Papel":
        if(player2 === "Pedra"){
            console.log("Player 1 won");
        } else if (player2 === "Papel"){
            console.log("A tie");
        } else {
            console.log("Player 2 won");
        }
        break;
}

//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".

let idadePessoa = 18;

if (idadePessoa >= 18) {
    console.log ("A pessoa é maior de idade");
}
else {
    console.log ("Menor de idade");
}

//5. Crie um algoritmo que recebe a idade de Manu, Ana e Ronald e imprime quem é a mais nova no formato:
// "Pessoa" é a mais nova.

let manu = 18;
let ana = 17;
let ronald = 19;

if (manu < ana && manu < ronald) {
    console.log("a manu a mais");
}
else if (ana < manu && ana < ronald) {
    console.log("ana é a mais nova");
}
else if (ronald < manu && ronald < ana) {
    console.log("ronald é o mais novo");
}