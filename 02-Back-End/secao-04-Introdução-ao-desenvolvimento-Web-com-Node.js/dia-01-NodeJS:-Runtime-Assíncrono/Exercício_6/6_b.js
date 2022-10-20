const fs = require('fs').promises;

const getCharacterId = async (id) => {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);
  const checkSimpson = simpsons.find((char) => Number(char.id) === id);

  if (!checkSimpson) {
    throw new Error('id não encontrado');
  }

  return checkSimpson;
}

async function main() {
  const simpson = await getCharacterId(10);
  console.log(simpson);
}

main();