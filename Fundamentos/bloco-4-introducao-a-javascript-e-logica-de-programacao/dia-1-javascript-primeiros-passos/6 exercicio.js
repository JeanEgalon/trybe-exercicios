// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas 
// quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

const pecaXadrez = "peao";

switch (pecaXadrez.toLowerCase()) {
    case "rei":
        console.log("O " + pecaXadrez + " pode mover 1 casa na horizontal, vertical ou diagonal");
        break;

    case "rainha":
        console.log("A " + pecaXadrez + " pode se mover quantas casas quiser na horizontal, vertical ou diagonal");
        break;

    case "bispo":
        console.log("O " + pecaXadrez + " pode mover quantas casas quiser na diagonal");
        break;

    case "torre":
        console.log("A " + pecaXadrez + " pode se mover quantas casas quiser na horizontal ou vertical");
        break;

    case "cavalo":
        console.log("O " + pecaXadrez + " pode se mover na posição de L pelo tabuleiro");
        break;

    case "peao":
        console.log("O " + pecaXadrez + " pode se mover na horizontal");
        break;

    default:
        console.log("Peça Inválida");
        break;
}