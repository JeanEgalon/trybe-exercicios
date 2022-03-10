// 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (chavesValores in car) {
    console.log(chavesValores, ":", car[chavesValores]);
}