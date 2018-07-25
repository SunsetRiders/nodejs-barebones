const express = require('express');
const router = new express.Router();

const initialMw = require('../../middlewares/initial');
const responseValidatorMw = require('../../middlewares/response-validator');
const jwtAuthMw = require('../../middlewares/jwt-auth');

/**
 * Before routes are executed
 */
router.use(initialMw);

/**
 * Routes goes here
 */
router.use('/health', require('./health'));
router.use('/alpha', jwtAuthMw, require('./alpha'));
router.use('/beta', jwtAuthMw, require('./beta'));

/**
 * After routes are executed
 */
router.use(responseValidatorMw);

module.exports = router;
