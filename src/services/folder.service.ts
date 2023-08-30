import { Folder } from '../models';

export const newFolder = async (name: string) => {
  return await Folder.create({
    name
  });
};

export const foldersList = () => {
  return Folder.find();
};
