const validateDescription = (req, res, next) => {
  const { description } = req.body;

  if (!description) {
    return res.sendStatus(400).json({ message: 'O campo description é obrigatório' });
  }
  if (!description.createdAt) {
    return res.sendStatus(400).json({ message: 'O campo createdAt é obrigatório' });
  }
  if (!description.rating) {
    return res.sendStatus(400).json({ message: 'O campo rating é obrigatório' });
  }
  if (!description.difficulty) {
    return res.sendStatus(400).json({ message: 'O campo difficulty é obrigatório' });
  }

  next();
};

module.exports = validateDescription;