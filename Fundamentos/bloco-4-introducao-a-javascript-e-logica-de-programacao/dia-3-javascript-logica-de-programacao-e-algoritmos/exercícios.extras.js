let soma = 0;

for (let contador = 0; contador <= 50; contador += 1) {
    soma = soma + contador;
}

console.log ("A soma de 1 a 50 é " + soma);

let conte = 0;

for (let contador = 2; contador <= 150; contador += 1) {
    if (contador % 3 === 0) {
        conte += 1;
    }
}

if (conte = 50) {
    console.log("mensagem secreta");
}

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

let idadePessoa = 18;

if (idadePessoa >= 18) {
    console.log ("A pessoa é maior de idade");
}
else {
    console.log ("Menor de idade");
}

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
