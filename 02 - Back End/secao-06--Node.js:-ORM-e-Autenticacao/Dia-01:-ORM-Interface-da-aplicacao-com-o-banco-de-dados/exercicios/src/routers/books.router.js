const express = require('express');
const booksController = require('../controller/book.controller');

const router = express.Router();

router.get('/', booksController.getAll);
router.get('/:id', booksController.getById);
router.post('/', booksController.create);
router.put('/:id', booksController.update);
router.delete('/:id', booksController.remove);

module.exports = router;