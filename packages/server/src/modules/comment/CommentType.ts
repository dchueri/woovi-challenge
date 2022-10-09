import { GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';

import {
  connectionDefinitions,
  objectIdResolver,
  timestampResolver
} from '@entria/graphql-mongo-helpers';

import { IComment } from 'src/types';
import { GraphQLContext } from '../../graphql/types';
import MovieModel from '../movie/MovieModel';
import MovieType from '../movie/MovieType';
import { nodeInterface, registerTypeLoader } from '../node/typeRegister';
import UserModel from '../user/UserModel';
import { UserType } from '../user/UserType';
import { load } from './CommentLoader';

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
      resolve: async comment => await UserModel.findById(comment.user),
    },
    movie: {
      type: MovieType,
      resolve: async comment => await MovieModel.findById(comment.movie),
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
