const express = require('express');
const router = new express.Router();

router.get('/', (req, res, next) => {
  return res.sendStatus(200).end();
});

module.exports = router;
