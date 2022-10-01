const express = require('express');

const data = require('./data/index');

const app = express();
app.use(express.json());

// Exercício 4
// Criar um endpoint do tipo GET com a rota / myActivities /: id, que lista uma atividade do array por id

app.get('/myActivities/:id', (req, res) => {
  const { id } = req.params;
  const atividade = data.find((item) => item.id === Number(id));
  res.status(200).json({ atividade });
});

// Exercício 5
// Crie outro endpoint do tipo GET com a rota /myActivities, que possa listar todas as atividades do array 🚀

app.get('/myActivities/', (req, res) => 
  res.status(200).json({ data }));

// Exercício 6
// Novamente crie um novo endpoint do tipo GET com a rota /filter/myActivities,
// que possa listar todas as atividades filtradas por status do array.

app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;
  const filterData = data.filter((item) => item.status === status);
  res.status(200).json({ filterData });
});

// Exercício 7
// Por último crie endpoint do tipo GET com a rota /search/myActivities,
// que possa listar todas as atividades filtradas por um termo específico do array.

// A rota deve receber a informação por query e a chave deve-se chamar q.
// A chave vai trazer consigo valor de ‘cachorro’ por exemplo,
// e o filtro deve trazer apenas as atividades com esse termo, se não encontrar, traga um array vazio 

app.get('/search/myActivities', (req, res) => {
  const { q } = req.query;
  let filterByQuery = [];

  if (q) {
    filterByQuery = data.filter((item) => item.description.includes(q));
  }

  res.status(200).json({ filterByQuery });
});

module.exports = app;