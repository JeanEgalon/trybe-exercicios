const express = require('express');
const BooksController = require('../controller/book.controller');

const router = express.Router();

router.get('/', BooksController.getAll);
router.get('/:id', BooksController.getById);
router.post('/', BooksController.create);
router.put('/:id', BooksController.update);
router.delete('/:id', BooksController.remove);

module.exports = router;  