const express = require('express');
const activitiesRouter = require('./activities.router');
const singUp = require('./signup.router');

const router = express.Router();
router.use(activitiesRouter);
router.use(singUp);

module.exports = router;