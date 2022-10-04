import { Document, Types } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  recovery?: string;
  encryptPassword: (password: string) => string;
}

export interface UserUpdate extends Document {
  email: string;
  name?: string;
  password?: string;
  recovery?: string;
}

export default interface IUserContext extends Document {
  name: string;
  email: string;
}

export interface IMovie extends Document {
  title: string;
  genre: string;
  image: string;
  description: string;
  average: number;
}

export interface MovieUpdate extends Document {
  title?: string;
  genre?: string;
  image?: string;
  description?: string;
  average?: number;
}

export interface IComment extends Document {
  user: Types.ObjectId;
  movie: Types.ObjectId;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}
