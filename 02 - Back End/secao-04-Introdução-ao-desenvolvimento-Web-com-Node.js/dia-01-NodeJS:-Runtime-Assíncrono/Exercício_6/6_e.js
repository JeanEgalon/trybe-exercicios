const fs = require('fs').promises;

const changeSimpsonsData = async () => {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);
  const filterCharacter = simpsons.filter(({ id }) => Number(id) === 8);

  const currentFamily = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const currentSimpsons = JSON.parse(currentFamily);
  const newSimpsons = [...currentSimpsons, filterCharacter]

  const newData = await fs.writeFile('./simpsonFamily.json', JSON.stringify(newSimpsons));

  return newData;
}

function main() {
  changeSimpsonsData();
}

main();
