const a = 100;
const b = 30;
const c = 50;

function triangulo(a, b, c) {
    let soma = a + b + c;
    if (a < 0 || b < 0 || c < 0) {
        return + "Valor inválido";
    }
    else if (soma === 180) {
        return true;
    }
    return false;
}

console.log(triangulo(a, b, c));
