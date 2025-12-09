const logger = require('../utils/logger');

exports.loggerMiddleware = (req, res, next) => {
  logger.info({ method: req.method, url: req.url });
  next();
};
