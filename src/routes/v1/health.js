const express = require('express');
const router = new express.Router();

router.get('/', (req, res, next) => {
  res.locals.status = 200;
  next();
});

module.exports = router;
