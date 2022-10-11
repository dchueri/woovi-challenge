import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

import { connectionArgs } from '@entria/graphql-mongo-helpers';

import * as MovieLoader from '../modules/movie/MovieLoader';
import { MovieConnection } from '../modules/movie/MovieType';
import { nodeField, nodesField } from '../modules/node/typeRegister';
import * as UserLoader from '../modules/user/UserLoader';
import UserType from '../modules/user/UserType';

import pkg from '../../package.json';
import { getByRecoveryToken } from '../modules/user/UserLoader';

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    node: nodeField,
    nodes: nodesField,
    me: {
      type: UserType,
      resolve: (root, args, context) => UserLoader.load(context, context.user?._id),
    },
    movies: {
      type: new GraphQLNonNull(MovieConnection.connectionType),
      args: {
        ...connectionArgs,
      },
      resolve: async (_, args, context) => await MovieLoader.loadAll(context, args),
    },
    user: {
      type: UserType,
      args: {
        recovery: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: async (_, args) => {
        const user = await getByRecoveryToken(args.recovery);
        return { id: user!.id, name: user!.name, email: user!.email };
      },
    },
    version: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: () => pkg.version,
    },
  }),
});

export default QueryType;
