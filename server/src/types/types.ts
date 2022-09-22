import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  encryptPassword: (password: string) => string;
}

export default interface IUserContext extends Document {
  name: string;
  email: string;
}
