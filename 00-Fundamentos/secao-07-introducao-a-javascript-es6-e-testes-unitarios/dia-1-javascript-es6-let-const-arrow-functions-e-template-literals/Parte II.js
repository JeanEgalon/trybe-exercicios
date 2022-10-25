// Exercício 1
let fatorial = 5;
let contador = 1;

for (let i = fatorial; i > 1; i -= 1) {
    contador *= i;
}
console.log(contador);

//Exercício 2
// referencias https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
const frase = 'Antônio foi no banheiro e não sabemos o que aconteceu';

let fraseEmArray = frase.split(' '); //aqui eu transformo a frase em array e salvo ela em fraseEmArray

let maiorPalavra = fraseEmArray[0]; // aqui pego a primeira palavra para comparar com as outras

for (let i = 0; i < fraseEmArray.length; i += 1) {
    if (fraseEmArray[i].length > maiorPalavra.length) {
        maiorPalavra = fraseEmArray[i]; // nessa parte o contador coloca a maior palavra dentro da let maiorPalavra
    }
}

console.log(maiorPalavra); //imprimo a maior palavra

//Exercício 4
// referencias https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176

// substituirCaracter('Bebeto');

const skills = ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Framework'];
function substituirCaracter(a) {
    const stringDeterminada = `Tryber x aqui!`;
    let stringFinal = '';
    let trocarCaracter = stringDeterminada.replace('x', a);
    stringFinal = trocarCaracter;

    let arrayOrganizado = skills.sort();
    let novaString = `${stringFinal} Minhas cinco principais habilidades são: ${arrayOrganizado} #goTrybe`;
    console.log(novaString);
    return novaString;
}

substituirCaracter('bebeto')
