const fs = require('fs').promises;

const changeSimpsonsData = async () => {
  const data = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(data);
  const newSimpsons = simpsons.filter(({ id }) => Number(id) != 10 && Number(id) != 6);

  const newData = await fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));

  return newData;
}

function main() {
  changeSimpsonsData();
}

main();