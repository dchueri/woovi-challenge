import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User, { IUser } from './modules/user/UserModel';
dotenv.config();

export const getUser = async (token: string | null | undefined) => {
  if (!token) return { user: null };

  try {
    const decodedToken = jwt.verify(token.substring(4), process.env.JWT_SECRET!);

    const user = await User.findOne({ _id: (decodedToken as { id: string }).id });

    return {
      user,
    };
  } catch (err) {
    return { user: null };
  }
};

export const generateToken = (user: IUser) => {
  return `JWT ${jwt.sign({ id: user._id }, process.env.JWT_SECRET!)}`;
};
