const teams = require('../dataTeams');

const validateTeam = (req, res, next) => {
  const { id } = req.params;
  const findID = teams.find((team) => team.id === Number(id));

  if (findID) {
    next();
  } else {
    res.status(400).send({ message: 'ID não encontrado' });
  }
};

module.exports = {
  validateTeam,
};