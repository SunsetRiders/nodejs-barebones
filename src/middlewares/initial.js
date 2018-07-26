const initial = (req, res, next) => {
  res.status = 404;
  res.locals.payload = {};
  res.locals.metadata = {};
  res.locals.errors = [];
  return next();
};

module.exports = initial;
