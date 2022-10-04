import mongoose, { Model } from "mongoose";
import { IMovie } from "../../types";

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    genre: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    average: { type: Number, required: true },
  },
  { collection: "Movies" }
);

const MovieModel: Model<IMovie> = mongoose.model<IMovie>("Movies", movieSchema);

export default MovieModel;
