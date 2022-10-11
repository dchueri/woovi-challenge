import { errorField, getObjectId, successField } from '@entria/graphql-mongo-helpers';
import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId, toGlobalId } from 'graphql-relay';
import { GraphQLContext } from '../../../graphql/types';
import * as MovieLoader from '../../movie/MovieLoader';
import MovieModel from '../../movie/MovieModel';
import MovieType from '../../movie/MovieType';
import * as CommentLoader from '../CommentLoader';
import CommentModel from '../CommentModel';
import { CommentConnection } from '../CommentType';

type Args = {
  movie: string;
  text: string;
};
const mutation = mutationWithClientMutationId({
  name: 'CommentCreateMutation',
  inputFields: {
    movie: {
      type: new GraphQLNonNull(GraphQLID),
    },
    text: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async (args: Args, context: GraphQLContext) => {
    if (!context.user) {
      return {
        error: 'user not logged',
      };
    }

    const movie = await MovieModel.findOne({
      _id: getObjectId(args.movie),
    });

    if (!movie) {
      return {
        error: 'movie not found',
      };
    }

    const comment = await new CommentModel({
      user: context.user._id,
      movie: movie,
      text: args.text,
    }).save();

    return {
      id: comment._id,
      movie: movie._id,
      error: null,
    };
  },
  outputFields: {
    commentEdge: {
      type: CommentConnection.edgeType,
      resolve: async ({ id }, _, context) => {
        const comment = await CommentLoader.load(context, id);

        if (!comment) {
          return null;
        }

        return {
          cursor: toGlobalId('Comment', comment._id),
          node: comment,
        };
      },
    },
    movie: {
      type: MovieType,
      resolve: async ({ movie }, _, context) => {
        return await MovieLoader.load(context, movie);
      },
    },
    ...errorField,
    ...successField,
  },
});

export default mutation;
