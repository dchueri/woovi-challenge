import * as jwt from "jsonwebtoken";
import { IUser } from "./types";

export const generateToken = (user: IUser) => {
  return `${jwt.sign({ id: user._id }, process.env.JWT_SECRET!)}`;
};
