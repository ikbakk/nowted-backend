import { Router } from 'express';
import { createFolder, getFolders } from '../controllers/folder.controller';

const folderRouter = Router();

folderRouter.post('/', createFolder);
folderRouter.get('/', getFolders);

export default folderRouter;
