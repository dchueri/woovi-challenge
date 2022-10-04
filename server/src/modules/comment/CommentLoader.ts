import { createLoader } from "@entria/graphql-mongo-helpers";

import { registerLoader } from "../loader/loaderRegister";
import { commentFilterMapping } from "./CommentFilterInputType";
import CommentModel from "./CommentModel";

const Loader = createLoader({
  model: CommentModel,
  loaderName: "CommentLoader",
  filterMapping: commentFilterMapping,
});

export default Loader;
export const {
  Wrapper: Comment,
  getLoader,
  clearCache,
  load,
  loadAll,
} = Loader;

registerLoader("CommentLoader", getLoader);
