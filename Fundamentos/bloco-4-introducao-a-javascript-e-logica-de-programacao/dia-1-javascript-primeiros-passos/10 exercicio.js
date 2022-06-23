const valorCusto = 1;
const valorVenda = 3;

valorCustoTotal = valorCusto * 1.2

lucro = (valorVenda - valorCustoTotal) * 1000

if (valorCusto < 0 || valorVenda < 0) {
    console.log("Valor inválido");
}
else {
    console.log("O lucro de 1000 produtos é " + lucro);
}
