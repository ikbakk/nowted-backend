import { Document, Types } from 'mongoose';

export type NoteSchema = Document & {
  title: string;
  content: string;
  folderId: Types.ObjectId | undefined;
  createdAt: Date;
};

export type FolderSchema = Document & {
  name: string;
  createdAt: Date;
};
