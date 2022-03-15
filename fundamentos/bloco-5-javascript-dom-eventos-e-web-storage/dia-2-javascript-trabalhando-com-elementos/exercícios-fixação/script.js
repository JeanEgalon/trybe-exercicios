// Acesse o elemento elementoOndeVoceEsta .
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const elementoPai = document.getElementById('elementoOndeVoceEsta').parentElement;
elementoPai.style.color = 'green';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFilhoDoFilho = document.getElementById('elementoOndeVoceEsta').firstElementChild;
primeiroFilhoDoFilho.innerText = 'Textão brabo';

// Acesse o primeiroFilho a partir de pai .
const primeiroFilho = document.getElementById('pai').firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
const primeiroFilho2 = document.getElementById('elementoOndeVoceEsta').previousElementSibling;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
const textoAtencao = document.getElementById('elementoOndeVoceEsta').nextSibling;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
const terceiroFilho = document.getElementById('elementoOndeVoceEsta').nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai .
const terceiroFilho2 = document.getElementById('pai').lastElementChild.previousElementSibling;

// Crie um irmão para elementoOndeVoceEsta .
const container = document.getElementById('pai');
const novoIrmao = document.createElement('section');
novoIrmao.id = 'novoIrmaoDeElementoOndeVoceEsta';
container.appendChild(novoIrmao);

// Crie um filho para elementoOndeVoceEsta .
const paiElementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const novoFilho = document.createElement('section');
novoFilho.id = 'novoFilhoElementoOndeVoceEsta';
paiElementoOndeVoceEsta.appendChild(novoFilho);

// Crie um filho para primeiroFilhoDoFilho .
const filhoPrimeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const novoFilhoPrimeiroFilhoDoFilho = document.createElement('section');
novoFilhoPrimeiroFilhoDoFilho.id = 'novoFilhoPrimeiroFilhoDoFilho';
filhoPrimeiroFilhoDoFilho.appendChild(novoFilhoPrimeiroFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho .
const terceiroFilho3 = novoFilhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
// Nessa parte eu fiquei um pouco confuso e me consultei o gabarito para entender melhor o que tinha feito de errado pois usei apenas um .nextElementSibling e nem cheguei
// a usar o .parentElement

// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
// deixei aqui o gabarito pois me confundi demais nessa parte
const pai = document.getElementById('pai');

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
    const currentChildren = pai.childNodes[index];
    if (currentChildren.id !== 'elementoOndeVoceEsta') {
        currentChildren.remove();
    }
}

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();