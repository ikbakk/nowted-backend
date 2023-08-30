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
