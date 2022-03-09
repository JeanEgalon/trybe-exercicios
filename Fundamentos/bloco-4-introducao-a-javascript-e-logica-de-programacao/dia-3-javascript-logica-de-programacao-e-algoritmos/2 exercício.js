// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. 
// Por exemplo, a palavra "banana" seria invertida para "ananab". 
// Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = "jean";

let newWord = "";

for (let contador = word.length; contador >= 0; contador -= 1) {
    if (contador === word.length) {
        newWord === word[contador];
    }
    else {
        newWord = newWord + word[contador];
    }
}

console.log(newWord);