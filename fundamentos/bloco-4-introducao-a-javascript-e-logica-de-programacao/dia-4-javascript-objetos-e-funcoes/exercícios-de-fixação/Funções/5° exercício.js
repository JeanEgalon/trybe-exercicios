// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. 
// Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.



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