let a = 2;
let b = 5;

function maiorMenor(a, b) {
    if (a > b) {
        return a + ' é maior que ' + b;
    }
    else if (b > a) {
        return b + ' é maior que ' + a;
    }
    return "valores iguais";
}

console.log(maiorMenor(a, b));
