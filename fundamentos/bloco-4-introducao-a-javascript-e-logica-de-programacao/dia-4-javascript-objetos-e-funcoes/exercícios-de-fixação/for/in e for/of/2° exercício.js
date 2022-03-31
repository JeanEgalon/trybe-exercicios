let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (chavesValores in car) {
    console.log(chavesValores, ":", car[chavesValores]);
}
