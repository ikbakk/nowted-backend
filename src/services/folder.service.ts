import { Folder } from '../models';

export const newFolder = async (name: string) => {
  const folder = await Folder.create({
    name
  });

  return folder;
};

export const foldersList = async () => {
  return await Folder.find();
};

export const updateFolder = async (id: string, name: string) => {
  const updatedFolder = await Folder.findByIdAndUpdate(id, {
    $set: {
      name
    }
  });

  return updatedFolder;
};

export const deleteFolder = async (id: string) => {
  const deletedFolder = await Folder.findByIdAndDelete(id);

  return deletedFolder;
};
