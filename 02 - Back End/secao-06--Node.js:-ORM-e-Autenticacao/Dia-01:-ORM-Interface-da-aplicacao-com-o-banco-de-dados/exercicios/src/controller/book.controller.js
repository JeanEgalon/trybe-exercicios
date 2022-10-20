const BookService = require('../services/book.service');

const getAll = async (_req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);

    if (!book) return res.status(404).json({ message: "Book not found" });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const book = await BookService.create(title, author, pageQuantity)
    res.status(201).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const updateBook = await BookService.update(id, { title, author, pageQuantity })

  if (!updateBook) return res.status(404).json({ message: 'Book not found!' })

  res.status(200).json({ message: 'Book updated!' });
}

const remove = async (req, res) => {
  const { id } = req.params;
  const removed = await BookService.remove(id)

  if (!removed) return res.status(404).json({ message: 'Book not found' });

  res.status(200).json({ message: 'Book Deleted!' });
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};