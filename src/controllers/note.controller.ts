import { NextFunction, Request, Response } from 'express';
import {
  deleteNote,
  newNote,
  notesList,
  updateNote
} from '../services/note.service';

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

export const editNote = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const updatedNote = await updateNote(id, content);
    res.status(200).json(updatedNote);
  } catch (err) {
    next(err);
  }
};

export const removeNote = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const deletedNote = await deleteNote(id);
    res.status(200).json(deletedNote);
  } catch (err) {
    next(err);
  }
};
