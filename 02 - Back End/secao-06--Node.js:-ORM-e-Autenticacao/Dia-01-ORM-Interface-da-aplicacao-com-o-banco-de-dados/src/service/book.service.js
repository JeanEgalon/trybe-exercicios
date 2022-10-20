const { Book } = require('../models')

const getAll = async () => {
  const result = await Book.findAll();
  return result;
}

const getById = async (id) => {
  const result = await Book.findByPk(id);
  return result
}

const create = async (title, author, pageQuantity) => {
  const newBook = await Book.create({ title, author, pageQuantity });
  return newBook;
}

const update = async (id, title, author, pageQuantity) => {
  const [updatedBook] = await Book.update(
    { title, author, pageQuantity },
    { where: { id } },
  );

  console.log(updatedBook);
  return updatedBook;
}

const deleteBook = async (id) => {
  const delBook = await Book.destroy(
    { where: { id } },
  );

  console.log(delBook);
  return delBook;
}


module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteBook,
};