import { model, Schema, Types } from 'mongoose';
import { NoteSchema } from '../types/models';

const noteSchema = new Schema<NoteSchema>({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  content: {
    type: String,
    required: [true, 'Content cannot be empty']
  },
  folderId: {
    type: Types.ObjectId,
    ref: 'Folder'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

noteSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Note = model<NoteSchema>('Note', noteSchema);

export default Note;
