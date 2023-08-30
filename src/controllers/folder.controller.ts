import { Request, Response } from 'express';
import { foldersList, newFolder } from '../services/folder.service';

export const getFolders = (req: Request, res: Response) => {
  const folders = foldersList();
  res.status(200).json(folders);
};

export const createFolder = (req: Request, res: Response) => {
  const { name } = req.body;
  const folder = newFolder(name);
  res.status(201).json(folder);
};
