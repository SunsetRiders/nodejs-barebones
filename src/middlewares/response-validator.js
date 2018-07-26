const config = require('getconfig');

const responseValidator = (req, res, next) => {
  const status = res.locals.status;
  const errors = res.locals.errors;

  if (status === 404 && Array.isArray(errors) && errors.length === 0) {
    errors.push(new Error("Not Found"));
  }

  if (Array.isArray(errors) && errors.length > 0) {
    errors.map(error => {
      if (error instanceof Error) {
        return {
          message: error.message,
          stack: (config.environment === 'development') ? error.stack : undefined
        };
      }
      return {message: error.message};
    });
  }
  return next();
};

module.exports = responseValidator;
