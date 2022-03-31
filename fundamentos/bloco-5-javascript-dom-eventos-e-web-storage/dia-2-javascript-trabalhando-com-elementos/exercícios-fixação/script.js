const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

const elementoPai = document.getElementById('elementoOndeVoceEsta').parentElement;
elementoPai.style.color = 'green';

const primeiroFilhoDoFilho = document.getElementById('elementoOndeVoceEsta').firstElementChild;
primeiroFilhoDoFilho.innerText = 'Textão brabo';

const primeiroFilho = document.getElementById('pai').firstElementChild;

const primeiroFilho2 = document.getElementById('elementoOndeVoceEsta').previousElementSibling;

const textoAtencao = document.getElementById('elementoOndeVoceEsta').nextSibling;

const terceiroFilho = document.getElementById('elementoOndeVoceEsta').nextElementSibling;

const terceiroFilho2 = document.getElementById('pai').lastElementChild.previousElementSibling;

const container = document.getElementById('pai');
const novoIrmao = document.createElement('section');
novoIrmao.id = 'novoIrmaoDeElementoOndeVoceEsta';
container.appendChild(novoIrmao);

const paiElementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const novoFilho = document.createElement('section');
novoFilho.id = 'novoFilhoElementoOndeVoceEsta';
paiElementoOndeVoceEsta.appendChild(novoFilho);

const filhoPrimeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const novoFilhoPrimeiroFilhoDoFilho = document.createElement('section');
novoFilhoPrimeiroFilhoDoFilho.id = 'novoFilhoPrimeiroFilhoDoFilho';
filhoPrimeiroFilhoDoFilho.appendChild(novoFilhoPrimeiroFilhoDoFilho);

const terceiroFilho3 = novoFilhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;

const pai = document.getElementById('pai');

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
    const currentChildren = pai.childNodes[index];
    if (currentChildren.id !== 'elementoOndeVoceEsta') {
        currentChildren.remove();
    }
}

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();
