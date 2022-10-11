import mongoose, { Document, Model, Types } from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    genre: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    average: { type: Number, required: true },
    author: {
      type: ObjectId,
      ref: 'Users',
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'Movies',
  },
);

export interface IMovie extends Document {
  title: string;
  genre: string;
  image: string;
  description: string;
  average: number;
  author: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const MovieModel: Model<IMovie> = mongoose.models["Movies"] ||mongoose.model('Movies', MovieSchema);

export default MovieModel;
