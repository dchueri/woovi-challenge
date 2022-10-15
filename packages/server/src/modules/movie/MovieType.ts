import { GraphQLFloat, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
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

import * as CommentLoader from '../comment/CommentLoader';
import CommentModel from '../comment/CommentModel';
import { CommentConnection } from '../comment/CommentType';

import UserModel from '../user/UserModel';
import UserType from '../user/UserType';
import { load } from './MovieLoader';
import { IMovie } from './MovieModel';

const MovieType = new GraphQLObjectType<IMovie, GraphQLContext>({
  name: 'Movie',
  description: 'Movie data',
  fields: () => ({
    id: globalIdField('Movie'),
    ...objectIdResolver,
    title: {
      type: GraphQLString,
      resolve: (movie) => movie.title,
    },
    genre: {
      type: GraphQLString,
      resolve: (movie) => movie.genre,
    },
    image: {
      type: GraphQLString,
      resolve: (movie) => movie.image,
    },
    description: {
      type: GraphQLString,
      resolve: (movie) => movie.description,
    },
    average: {
      type: GraphQLFloat,
      resolve: (movie) => movie.average,
    },
    author: {
      type: UserType,
      resolve: (movie, _, context) => UserModel.findById(movie.author),
    },
    commentsCount: {
      type: new GraphQLNonNull(GraphQLInt),
      resolve: movie => CommentModel.countDocuments({ movie: movie._id }),
    },
    comments: {
      type: new GraphQLNonNull(CommentConnection.connectionType),
      args: {
        ...connectionArgs,
      },
      resolve: async (movie, args, context) =>
        await CommentLoader.loadAll(context, withFilter(args, { movie: movie._id })),
    },
    ...timestampResolver,
  }),
  interfaces: () => [nodeInterface],
});

export default MovieType;

registerTypeLoader(MovieType, load);

export const MovieConnection = connectionDefinitions({
  name: 'Movie',
  nodeType: MovieType,
});
