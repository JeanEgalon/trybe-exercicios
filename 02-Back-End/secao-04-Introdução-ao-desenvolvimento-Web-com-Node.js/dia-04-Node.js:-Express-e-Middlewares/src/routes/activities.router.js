const express = require('express');
const auth = require('../middlewares/auth');
const validateName = require('../middlewares/validateName');
const validatePrice = require('../middlewares/validatePrice');
const validateDescription = require('../middlewares/validateDescription');
const validateCreatedAt = require('../middlewares/validateCreatedAt');
const validateRating = require('../middlewares/validateRating');
const validateDifficulty = require('../middlewares/validateDifficulty');

const router = express.Router();

router.post('/activities',
  auth,
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
  (_req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = router;