import movies from "../../graphql/movie/MovieModel";

export async function getAll() {
  const moviesList = await movies.find({});
  if (!moviesList) {
    return null;
  }
  return moviesList;
}
