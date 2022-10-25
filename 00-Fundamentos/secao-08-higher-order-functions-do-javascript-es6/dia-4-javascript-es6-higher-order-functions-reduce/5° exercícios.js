// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  const total = names.reduce(
    (acumulador, valor) =>
      acumulador +
      valor.split("").reduce((acc, indexValor) => {
        if (indexValor === "a" || indexValor === "A") return acc + 1;
        return acc;
      }, 0),
    0
  );
  return total;
}

console.log(containsA());
