import { NextFunction, Request, Response } from 'express';
import { newNote, notesList } from '../services/note.service';

export const getNotes = async (req: Request, res: Response) => {
  const notes = await notesList();
  res.status(200).json(notes);
};

export const createNote = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { folderId } = req.params;
    const { title, content } = req.body;
    const note = await newNote(folderId, title, content);
    res.status(201).json(note);
  } catch (err) {
    next(err);
  }
};
