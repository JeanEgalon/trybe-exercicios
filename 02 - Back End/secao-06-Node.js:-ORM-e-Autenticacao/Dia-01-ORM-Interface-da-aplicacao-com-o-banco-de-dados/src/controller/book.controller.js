const BookService = require('../service/book.service')

const error500 = 'Algo deu errado';

const getAll = async (req, res) => {
  const result = await BookService.getAll();
  
  return res.status(200).json(result);
}

const getById = async (req, res) => {
  const { id } = req.params;

  const result = await BookService.getById(id);

  if (!result) return res.status(404).json({ "message": "Book not found" });

  return res.status(200).json(result)
}

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;

  const newBook = await BookService.create(title, author, pageQuantity);

  return res.status(200).json(newBook)
}

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;

  const updatedBook = await BookService.update(id, title, author, pageQuantity)

  if (!updatedBook) return res.status(404).json({message: 'Book not found!'});

  return res.status(200).json({message: 'Book updated!'});
}

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await BookService.deleteBook(id);
    
    return res.status(200).json({ message: 'Livro excluído com sucesso!' })
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({message: error500});
  }
}


module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteBook,
}