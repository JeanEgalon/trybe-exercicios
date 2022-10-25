const fs = require('fs').promises;

const changeSimpsonsData = async () => {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);
  const newSimpsons = simpsons.filter(({ id }) => Number(id) >= 1 && Number(id) <= 4);

  const newData = await fs.writeFile('./simpsonFamily.json', JSON.stringify(newSimpsons));

  return newData;
}

function main() {
  changeSimpsonsData();
}

main();