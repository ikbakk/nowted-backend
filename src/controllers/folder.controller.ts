import { NextFunction, Request, Response } from 'express';
import {
  deleteFolder,
  foldersList,
  newFolder,
  updateFolder
} from '../services/folder.service';

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

export const editFolder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedFolder = await updateFolder(id, name);
    res.status(200).json(updatedFolder);
  } catch (err) {
    next(err);
  }
};

export const removeFolder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const deletedFolder = await deleteFolder(id);
    res.status(200).json(deletedFolder);
  } catch (err) {
    next(err);
  }
};
