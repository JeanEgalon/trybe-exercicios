const a = 0;

function valorDefinido(a) {
    if (a > 0) {
        return "positive";
    }
    else if (a < 0) {
        return "negative";
    }
    return "zero";
}

console.log(valorDefinido(a));
