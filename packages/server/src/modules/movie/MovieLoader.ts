import { createLoader } from "@entria/graphql-mongo-helpers";
import { registerLoader } from "../loader/loaderRegister";
import { movieFilterMapping } from "./MovieFilterInputType";
import MovieModel from "./MovieModel";

export async function getAll() {
  const moviesList = await MovieModel.find({});
  if (!moviesList) {
    return null;
  }
  return moviesList;
}

const Loader = createLoader({
  model: MovieModel,
  loaderName: "MovieLoader",
  filterMapping: movieFilterMapping,
});

export default Loader;
export const { Wrapper: Movie, getLoader, clearCache, load, loadAll } = Loader;

registerLoader("MovieLoader", getLoader);
