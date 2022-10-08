import mongoose from 'mongoose';
require('dotenv').config()

export const connectDatabase = async (): Promise<void> => {
  mongoose.connection
    .once('open', () => console.log('Connected with the database!'))
    .on('error', err => console.log(err))
    .on('close', () => console.log('Database connection was closed!'));
  await mongoose.connect(process.env.MONGO_URL!.toString());
};
