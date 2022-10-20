const botao = document.getElementById('botao');
let contadorHTML = document.getElementById('contador');

let contador = 0;
botao.addEventListener('click', () => {
    contador += 1;
    contadorHTML.innerText = `Você clicou ${contador} vezes no botão`;
});
