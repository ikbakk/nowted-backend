import { Note } from '../models';

export const newNote = async (
  folderId: string,
  title: string,
  content: string
) => {
  const note = await Note.create({
    folderId,
    title,
    content
  });

  return note;
};

export const notesList = async () => {
  return await Note.find();
};
