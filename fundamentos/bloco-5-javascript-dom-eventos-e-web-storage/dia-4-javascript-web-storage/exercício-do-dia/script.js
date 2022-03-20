window.onload = function () {
    let corDeFundoSalva = localStorage.getItem('Cor de Fundo');
    document.body.style.backgroundColor = corDeFundoSalva;

    let corDoTextoSalva = localStorage.getItem('Cor do Texto');
    document.body.style.color = corDoTextoSalva;

    let tamanhoDaFonteSalva = localStorage.getItem('Tamanho da Fonte');
    document.body.style.fontSize = tamanhoDaFonteSalva;

    let espacamentoSalvo = localStorage.getItem('Espaçamento entre Linhas');
    document.body.style.lineHeight = espacamentoSalvo;

    let fonteSalva = localStorage.getItem('Fonte do Texto');
    document.body.style.fontFamily = fonteSalva;
    
}
//Alterando a Cor de Fundo da Página
function alterarCorDeFundo() {
    let selecionador = document.getElementById('cor-de-fundo');
    selecionador.addEventListener('change', function () {
        let corAlterada = selecionador.selectedOptions[0];
        document.body.style.backgroundColor = corAlterada.value;
        localStorage.setItem('Cor de Fundo', corAlterada.value);
    })
}
alterarCorDeFundo();

//Alterando a Cor do Texto
function corDoTexto() {
    let corTexto = document.getElementById('cor-do-texto');
    corTexto.addEventListener('change', function () {
        let corTextoAlterado = corTexto.selectedOptions[0];
        document.body.style.color = corTextoAlterado.value;
        localStorage.setItem('Cor do Texto', corTextoAlterado.value);
    })
}
corDoTexto();

//Alterando o Tamanho da Fonte do paragrafo
function tamanhoDaFonte() {
    let tamanhoFonte = document.querySelector('#tamanhoFonte');
    tamanhoFonte.addEventListener('change', function () {
        document.querySelector('p').style.fontSize = `${tamanhoFonte.value}px`;
        localStorage.setItem('Tamanho da Fonte', `${tamanhoFonte.value}px`);
    })
}
tamanhoDaFonte();

//Alterando o Espaçamento entre Linhas
function espaçamentoEntreLinhas() {
    let espacamento = document.querySelector('#espacamento-linha');
    espacamento.addEventListener('change', function () {
        document.querySelector('p').style.lineHeight = `${espacamento.value}px`;
        localStorage.setItem('Espaçamento entre Linhas', `${espacamento.value}px`);
    })
}
espaçamentoEntreLinhas();

//Alterando a Fonte
function fonteFamily() {
    let fonte = document.querySelector('#tipo-da-fonte');
    fonte.addEventListener('change', function () {
        document.querySelector('p').style.fontFamily = `${fonte.value}`;
        localStorage.setItem('Fonte do Texto', `${fonte.value}`);
    })
}
fonteFamily();