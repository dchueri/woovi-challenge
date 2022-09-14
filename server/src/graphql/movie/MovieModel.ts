import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
});

const movies = mongoose.model("movies", movieSchema);

export default movies;
