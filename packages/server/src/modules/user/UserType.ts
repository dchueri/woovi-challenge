import { GraphQLBoolean, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';

import {
  connectionArgs,
  connectionDefinitions,
  objectIdResolver,
  timestampResolver,
  withFilter
} from '@entria/graphql-mongo-helpers';

import { nodeInterface, registerTypeLoader } from '../node/typeRegister';

import { GraphQLContext } from '../../graphql/types';

import * as MovieLoader from '../movie/MovieLoader';
import { MovieConnection } from '../movie/MovieType';

import * as CommentLoader from '../comment/CommentLoader';
import { CommentConnection } from '../comment/CommentType';

import { load } from './UserLoader';
import { IUser } from './UserModel';

const UserType = new GraphQLObjectType<IUser, GraphQLContext>({
  name: 'User',
  description: 'User data',
  fields: () => ({
    id: globalIdField('User'),
    ...objectIdResolver,
    name: {
      type: GraphQLString,
      resolve: user => user.name,
    },
    email: {
      type: GraphQLString,
      resolve: user => user.email,
    },
    movies: {
      type: new GraphQLNonNull(MovieConnection.connectionType),
      args: {
        ...connectionArgs,
      },
      resolve: async (user, args, context) =>
        await MovieLoader.loadAll(
          context,
          withFilter(args, {
            author: user._id,
          }),
        ),
    },
    comments: {
      type: new GraphQLNonNull(CommentConnection.connectionType),
      args: {
        ...connectionArgs,
      },
      resolve: async (user, args, context) =>
        await CommentLoader.loadAll(context, withFilter(args, { user: user._id })),
    },
    recovery: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (user) => user.recovery,
    },
    helperSeen: {
      type: GraphQLBoolean,
      resolve: (user) => user.helperSeen,
    },
    ...timestampResolver,
  }),
  interfaces: () => [nodeInterface],
});

export default UserType;

registerTypeLoader(UserType, load);

export const UserConnection = connectionDefinitions({
  name: 'User',
  nodeType: UserType,
});
