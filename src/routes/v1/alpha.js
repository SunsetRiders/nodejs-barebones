const express = require('express');
const router = new express.Router();
const myValidatorMw = require('../../middlewares/my-validator');

router.get('/alpha', myValidatorMw, (req, res, next) => {

});
