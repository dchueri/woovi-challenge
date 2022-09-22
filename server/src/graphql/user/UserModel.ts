import * as bcrypt from "bcrypt";
import mongoose, { Schema } from "mongoose";
import { IUser } from "../../types/types";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    movies: { type: [Schema.Types.ObjectId] },
  },
  { collection: "Users" }
);

userSchema.methods = {
  authenticate(plainTextPassword: string) {
    return bcrypt.compareSync(plainTextPassword, this.password);
  },
  encryptPassword(password: string) {
    return bcrypt.hash(password, 10);
  },
};

const UserModel = mongoose.model<IUser>("Users", userSchema);

export default UserModel;
