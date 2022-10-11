import { GraphQLID, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

import { errorField, getObjectId, successField } from '@entria/graphql-mongo-helpers';

import MovieModel from '../../movie/MovieModel';

import * as PostLoader from '../../movie/MovieLoader';

import { GraphQLContext } from '../../../graphql/types';
import MovieType from '../../movie/MovieType';

import LikeModel from '../LikeModel';

type Args = {
  post: string;
};
const mutation = mutationWithClientMutationId({
  name: 'PostUnLike',
  inputFields: {
    post: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  mutateAndGetPayload: async (args: Args, context: GraphQLContext) => {
    // TODO - move this check to a middleware
    if (!context.user) {
      return {
        error: 'user not logged',
      };
    }

    const post = await MovieModel.findOne({
      _id: getObjectId(args.post),
    });

    if (!post) {
      return {
        error: 'post not found',
      };
    }

    const hasLiked = await LikeModel.findOne({
      post: post._id,
      user: context.user._id,
    });

    if (!hasLiked) {
      return {
        id: post._id,
        error: 'You have not liked this post yet',
      };
    }

    await hasLiked.remove();

    return {
      id: post._id,
      error: null,
      success: 'Post unliked',
    };
  },
  outputFields: {
    post: {
      type: MovieType,
      resolve: async ({ id }, _, context) => {
        return await PostLoader.load(context, id);
      },
    },
    ...errorField,
    ...successField,
  },
});

export default mutation;

// TODO enable middleware
// export default {
//   ...mutation,
//   authenticatedOnly: true,
// };
