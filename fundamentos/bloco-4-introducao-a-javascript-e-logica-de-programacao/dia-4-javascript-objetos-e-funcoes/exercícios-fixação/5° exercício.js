// 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
// Agora veremos uma variação do laço for , que nos garante facilidade ao lidar com objetos.

// 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

let player = {
    name : 'Marta',
    lastName : 'Silva',
    age : 34,
    medals : {golden: 2, silver: 3},
};

player['bestInTheWorld'] = ["2006", "2007", "2008", "2009", "2010", "2018"];

console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.");