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

export const updateNote = async (id: string, content: string) => {
  const updatedNote = await Note.findByIdAndUpdate(id, {
    $set: {
      content
    }
  });

  return updatedNote;
};

export const deleteNote = async (id: string) => {
  const deletedNote = await Note.findByIdAndDelete(id);

  return deletedNote;
};
