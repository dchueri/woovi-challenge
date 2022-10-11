import { createLoader } from '@entria/graphql-mongo-helpers';

import { registerLoader } from '../loader/loaderRegister';

import { movieFilterMapping } from './MovieFilterInputType';
import MovieModel from './MovieModel';

const {
  Wrapper: Movie,
  getLoader,
  clearCache,
  load,
  loadAll,
} = createLoader({
  model: MovieModel,
  loaderName: 'MovieLoader',
  filterMapping: movieFilterMapping,
});

export { getLoader, clearCache, load, loadAll };
export default Movie;

registerLoader('MovieLoader', getLoader);
