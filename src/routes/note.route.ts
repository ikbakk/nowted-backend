import { Router } from 'express';
import { createNote, getNotes } from '../controllers/note.controller';

const noteRouter = Router();

noteRouter.post('/', createNote);
noteRouter.get('/', getNotes);

export default noteRouter;
