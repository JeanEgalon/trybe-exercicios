const fs = require('fs').promises;

const readAllCharacters = async () => {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(data);
    const result = simpsons.map(({ id, name }) => console.log(`${id} - ${name}`));
    return result;
  } catch (error) {
    console.error(`Erro na leitura do arquivo ${error}`);
  }
}

async function main() {
  await readAllCharacters();
}

main();