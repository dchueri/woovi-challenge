import { createLoader } from '@entria/graphql-mongo-helpers';
import { registerLoader } from '../loader/loaderRegister';
import { commentFilterMapping } from './CommentFilterInputType';
import CommentModel from './CommentModel';

const {
  Wrapper: Comment,
  getLoader,
  clearCache,
  load,
  loadAll,
} = createLoader({
  model: CommentModel,
  loaderName: 'CommentLoader',
  filterMapping: commentFilterMapping,
});

export { getLoader, clearCache, load, loadAll };
export default Comment;

registerLoader('CommentLoader', getLoader);
