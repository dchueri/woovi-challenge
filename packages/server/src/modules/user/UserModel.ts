import * as bcrypt from "bcrypt";
import mongoose, { Model, Schema } from "mongoose";
import { IUser } from "../../types";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    recovery: { type: String, required: false },
    movies: { type: [Schema.Types.ObjectId] },
    helperSeen: { type: Boolean, required: false },
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

const UserModel: Model<IUser> = mongoose.model<IUser>("Users", userSchema);

export default UserModel;
