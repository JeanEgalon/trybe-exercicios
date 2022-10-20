const express = require('express');
const bookController = require('../controller/book.controller');

const router = express.Router();

router.get('/', bookController.getAll);
router.get('/:id', bookController.getById);
router.post('/', bookController.create);
router.put('/:id', bookController.update);
router.delete('/:id', bookController.deleteBook);

module.exports = router;