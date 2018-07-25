const express = require('express');
const router = new express.Router();

router.use('/api/v1', require('./v1'));
router.use('/api/v2', require('./v2'));

module.exports = router;
