import { createLoader } from "@entria/graphql-mongo-helpers";

import { registerLoader } from "../loaderRegister";
import UserModel from "./UserModel";

const Loader = createLoader({
  model: UserModel,
  loaderName: "UserLoader",
});

export default Loader;
export const { Wrapper: User, getLoader, clearCache, load, loadAll } = Loader;

registerLoader("UserLoader", getLoader);
