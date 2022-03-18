function mudarTextoP() {
    let textoAlterado = document.getElementsByTagName('p')[1];
    textoAlterado.innerHTML = "Programando e rico igual o Tio Zuke"
}
MudarTextoP();

// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function changeBackColor() {
    let corDeFundo = document.getElementsByClassName('main-content')[0];
    corDeFundo.style.background = "rgb(76,164,109)";
}
changeBackColor();