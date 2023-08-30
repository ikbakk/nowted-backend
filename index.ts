import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { logger } from './src/utils/logger';
import { errorHandle, notFound } from './src/middlewares';
import { folderRouter } from './src/routes';

dotenv.config();
const app = express();
const port = process.env.PORT ?? 3001;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api/folder', folderRouter);
app.use(notFound);
app.use(errorHandle);
app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
