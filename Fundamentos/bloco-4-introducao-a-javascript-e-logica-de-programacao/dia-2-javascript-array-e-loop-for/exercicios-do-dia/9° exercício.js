// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2

let listinha = [];

for (let contador = 1; contador < 26; contador += 1) {
    listinha.push(contador);
}

// console.log(listinha);

for (let contador2 = 0; contador2 < listinha.length; contador2 += 1) {
    console.log (listinha[contador2] / 2);
}