const express = require('express');
const router = new express.Router();

const initial = require('../../middlewares/initial');
const responseValidator = require('../../middlewares/response-validator');

/* Before routes are executed */
router.use(initial);

/* Routes go here */
router.use('/health', require('./health'));

/* After routes are executed */
router.use(responseValidator);

module.exports = router;
