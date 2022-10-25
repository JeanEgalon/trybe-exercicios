const express = require('express');
const generateToken = require('../utils/generateToken');

const router = express.Router();

router.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }

  const token = generateToken();

  return res.status(200).json({ token });
});

module.exports = router;