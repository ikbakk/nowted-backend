import mongoose from 'mongoose';
import { logger } from './logger';

const connectDB = (dbUrl: string) => {
  const mongoConnection = mongoose.connection;
  mongoose.connect(dbUrl, {
    serverSelectionTimeoutMS: 5000
  });

  mongoConnection.on('connecting', () => {
    logger.info('Connecting to MongoDB');
  });
  mongoConnection.on('error', err => {
    logger.error(err);
  });
  mongoConnection.on('connected', () => {
    logger.info('Connected to MongoDB');
  });
};

export default connectDB;
