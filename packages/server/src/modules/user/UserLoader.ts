import { createLoader } from '@entria/graphql-mongo-helpers';

import { registerLoader } from '../loader/loaderRegister';

import UserModel from './UserModel';

const {
  Wrapper: User,
  getLoader,
  clearCache,
  load,
  loadAll,
} = createLoader({
  model: UserModel,
  loaderName: 'UserLoader',
});

export async function getByRecoveryToken(recovery: any ) {
  const user = await UserModel.findOne({ recovery: recovery });
  if (!user) {
    return null;
  }
  return user;
}

export { getLoader, clearCache, load, loadAll };
export default User;

registerLoader('UserLoader', getLoader);
