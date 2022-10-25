const a = 7;
const b = 5;
const c = 7;

function maiorMenor(a, b, c) {
    if (a > b && a > c) {
        return a + ' é o maior';
    }
    else if (b > a && b > c) {
        return b + ' é o maior';
    }
    return c + ' é o maior';
}

console.log(maiorMenor(a, b, c));
