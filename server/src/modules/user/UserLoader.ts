import { createLoader } from "@entria/graphql-mongo-helpers";

import { registerLoader } from "../../graphql/loaderRegister";
import UserModel from "./UserModel";

const Loader = createLoader({
  model: UserModel,
  loaderName: "UserLoader",
});

export async function getByRecoveryToken(recovery) {
  const user = await UserModel.findOne({ recovery: recovery });
  if (!user) {
    return null;
  }
  return user;
}

export default Loader;
export const { Wrapper: User, getLoader, clearCache, load, loadAll } = Loader;

registerLoader("UserLoader", getLoader);
