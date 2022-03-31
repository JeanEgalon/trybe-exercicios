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
