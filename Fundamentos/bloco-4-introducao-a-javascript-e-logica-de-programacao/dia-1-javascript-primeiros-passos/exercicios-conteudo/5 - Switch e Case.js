// Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;

let candidata = "aprovada";

// Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior
//  se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .

switch (candidata) {
    case "aprovada":
        console.log("Você foi aprovada");
        break;

    case "lista":
        console.log("Lista");
        break;

    case "reprovada":
        console.log("reprovada");
        break;

    default:
        console.log("não se aplica");
}