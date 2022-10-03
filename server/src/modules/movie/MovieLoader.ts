import movies from "./MovieModel";

export async function getAll() {
  const moviesList = await movies.find({});
  if (!moviesList) {
    return null;
  }
  return moviesList;
}
