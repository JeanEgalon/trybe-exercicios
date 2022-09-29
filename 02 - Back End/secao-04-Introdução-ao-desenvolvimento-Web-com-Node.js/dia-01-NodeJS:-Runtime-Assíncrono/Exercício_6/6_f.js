const fs = require('fs').promises;

const changeSimpsonsData = async () => {
  const data = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsons = JSON.parse(data);
  simpsons.splice(4, 1, {"id":"5","name":"Maggie Simpson"})

  const newData = await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsons));

  return newData;
}

function main() {
  changeSimpsonsData();
}

main();