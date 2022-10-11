import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();


export const connectDatabase = async (): Promise<void> => {
  mongoose.connection.on('close', () => console.log('Database connection closed.'));

  await mongoose.connect(process.env.MONGO_URI!);
};
