import express, { json, urlencoded } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { logger } from './src/utils/logger';
import { errorHandle, notFound } from './src/middlewares';
import { folderRouter, noteRouter } from './src/routes';
import connectDB from './src/utils/db';

dotenv.config();
const app = express();
const port = process.env.PORT ?? 3001;
const dbUrl = process.env.DB_URL ?? 'mongodb://localhost:27017/tesNowted';

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api/notes', noteRouter);
app.use('/api/folders', folderRouter);
app.use(notFound);
app.use(errorHandle);

connectDB(dbUrl);
app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
