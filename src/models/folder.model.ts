import { model, Schema } from 'mongoose';
import { FolderSchema } from '../types/models';

const folderSchema = new Schema<FolderSchema>({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

folderSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Folder = model<FolderSchema>('Folder', folderSchema);

export default Folder;
