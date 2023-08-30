import winston from 'winston';

const logFormat = winston.format.printf(({ level, message, timestamp }) => {
  const newTimestamp = new Date(timestamp).toLocaleTimeString();
  return `${newTimestamp} [${level}]: ${message}`;
});

export const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.errors({ stack: true }),
    winston.format.timestamp(),
    logFormat
  ),
  transports: [new winston.transports.Console()]
});
