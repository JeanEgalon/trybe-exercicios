let INSS;
let IR;

const salBruto = 40000.00;

if (salBruto <= 1556.94) {
    INSS = salBruto * 0.08;
}
else if (salBruto < 2594.92) {
    INSS = salBruto * 0.09;
}
else if (salBruto < 5189.82) {
    INSS = salBruto * 0.11
}
else {
    INSS = 570.88;
}

const salarioLiquido = salBruto - INSS;

if (salarioLiquido <= 1903.98) {
    IR = 0;
}
else if (salarioLiquido <= 2826.65) {
    IR = (salarioLiquido * 0.075) - 142.80;
}
else if (salarioLiquido <= 3751.05) {
    IR = (salarioLiquido * 0.15) - 354.80;
}
else if (salarioLiquido <= 4664.68) {
    IR = (salarioLiquido * 0.225) - 636.13;
}
else {
    IR = (salarioLiquido * 0.275) - 869.93;
};

console.log("A receber: " + (salarioLiquido - IR));
