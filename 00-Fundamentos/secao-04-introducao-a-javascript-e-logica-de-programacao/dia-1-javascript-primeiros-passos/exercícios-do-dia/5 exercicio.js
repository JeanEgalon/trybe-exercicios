const a = 150;
const b = 15;
const c = -10;

soma = a + b + c;

if (a < 0 || b < 0 || c < 0) {
    console.log("Valor inválido");
}
else if (soma === 180) {
    console.log(true);
}
else {
    console.log(false);
}
