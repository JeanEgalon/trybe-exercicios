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
