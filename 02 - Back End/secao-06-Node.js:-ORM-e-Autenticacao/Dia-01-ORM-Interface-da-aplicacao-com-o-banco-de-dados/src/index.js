const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { bookRouter } = require('./routers')

app.use(express.json());
app.use('/books', bookRouter)

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));