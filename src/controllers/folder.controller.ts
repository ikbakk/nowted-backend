import { NextFunction, Request, Response } from 'express';
import { foldersList, newFolder } from '../services/folder.service';

export const getFolders = async (req: Request, res: Response) => {
  const folders = await foldersList();
  res.status(200).json(folders);
};

export const createFolder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name } = req.body;
    const folder = await newFolder(name);
    res.status(201).json(folder);
  } catch (err) {
    next(err);
  }
};
