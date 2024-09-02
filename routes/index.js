const router = require('express').Router();

const fnotesRouter = require('./fnotes');

router.use('/fnotes', fnotesRouter);

module.exports = router;