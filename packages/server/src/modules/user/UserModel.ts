import bcrypt from 'bcryptjs';
import mongoose, { Document, Model } from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
      index: true,
    },
    password: {
      type: String,
      hidden: true,
    },
    recovery: { type: String, required: false },
    helperSeen: { type: Boolean, required: false },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'Users',
  },
);

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  recovery?: string;
  helperSeen?: boolean;
  authenticate: (plainTextPassword: string) => boolean;
  encryptPassword: (password: string | undefined) => string;
  createdAt: Date;
  updatedAt: Date;
}

UserSchema.pre<IUser>('save', function encryptPasswordHook(next) {
  if (this.isModified('password')) {
    this.password = this.encryptPassword(this.password);
  }

  return next();
});

UserSchema.methods = {
  authenticate(plainTextPassword: string) {
    return bcrypt.compareSync(plainTextPassword, this.password);
  },
  encryptPassword(password: string) {
    return bcrypt.hashSync(password, 10);
  },
};

const UserModel: Model<IUser> = mongoose.models["Users"] ||mongoose.model('Users', UserSchema);

export default UserModel;
