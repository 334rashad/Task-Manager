// const { CustomAPIError } = require('../errors/custom-error');

const errorHandler = (err, req, res, next) => {
  console.error(err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong';

//   if (err instanceof CustomAPIError) {
//     statusCode = err.statusCode;
//     message = err.message;
//   }

  return res.status(statusCode).json({
    success: false,
    error: message,
  });
};

module.exports = errorHandler;