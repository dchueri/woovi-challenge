import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import { globalIdField } from 'graphql-relay';

import {
  connectionDefinitions,
  objectIdResolver,
  timestampResolver
} from '@entria/graphql-mongo-helpers';

import { nodeInterface, registerTypeLoader } from '../node/typeRegister';

import { GraphQLContext } from '../../graphql/types';
import * as MovieLoader from '../movie/MovieLoader';
import * as UserLoader from '../user/UserLoader';
import UserType from '../user/UserType';

import LikeModel from '../like/LikeModel';
import MovieType from '../movie/MovieType';

import { load } from './CommentLoader';
import { IComment } from './CommentModel';

const CommentType = new GraphQLObjectType<IComment, GraphQLContext>({
  name: 'Comment',
  description: 'Comment data',
  fields: () => ({
    id: globalIdField('Comment'),
    ...objectIdResolver,
    text: {
      type: GraphQLString,
      resolve: comment => comment.text,
    },
    user: {
      type: UserType,
      resolve: (comment, _, context) => UserLoader.load(context, comment.user),
    },
    movie: {
      type: MovieType,
      resolve: (comment, _, context) =>
        MovieLoader.load(context, comment.movie),
    },
    likesCount: {
      type: new GraphQLNonNull(GraphQLInt),
      resolve: comment => LikeModel.countDocuments({ comment: comment._id }),
    },
    meHasLiked: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'whether logged user liked this movie',
      resolve: async (comment, _, context) => {
        if (!context.user) {
          return false;
        }

        return (
          (await LikeModel.countDocuments({
            comment: comment._id,
            user: context.user._id,
          })) > 0
        );
      },
    },
    ...timestampResolver,
  }),
  interfaces: () => [nodeInterface],
});

export default CommentType;

registerTypeLoader(CommentType, load);

export const CommentConnection = connectionDefinitions({
  name: 'Comment',
  nodeType: CommentType,
});
