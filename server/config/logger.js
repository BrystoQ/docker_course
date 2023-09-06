const winston = require("winston");

const {
  format: { combine, timestamp, json },
} = winston;

const consoleTransport = new winston.transports.Console({
  format: combine(timestamp(), json()),
});

const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), json()),
  transports: [consoleTransport], // Ajout de consoleTransport
});

logger.stream = {
  write: (message) => {
    logger.info(message);
  },
};

module.exports = logger;
