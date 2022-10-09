import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId, toGlobalId } from 'graphql-relay';
import { getContext } from '../../../getContext';
import pubSub, { EVENTS } from '../../../pubSub';
import { IComment } from '../../../types';
import CommentModel from '../CommentModel';
import { CommentConnection } from '../CommentType';

type Args = {
  movie: string;
  text: string;
};
export default mutationWithClientMutationId({
  name: 'CommentCreate',
  inputFields: {
    movie: {
      type: new GraphQLNonNull(GraphQLID),
    },
    text: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async (args: Args, ctx) => {
    const context = await getContext(ctx);
    if (!context.user) {
      return {
        error: 'User not logged',
      };
    }
 
    const comment: IComment = await new CommentModel({
      user: context.user._id,
      movie: args.movie,
      text: args.text,
    }).save();

    await pubSub.publish(EVENTS.COMMENT.NEW, { commentId: comment._id });

    return {
      comment,
    };
  },
  outputFields: {
    commentEdge: {
      type: CommentConnection.edgeType,
      resolve: async ({ comment }) => {
        if (!comment) {
          return null;
        }

        return {
          cursor: toGlobalId('Comment', comment._id),
          node: comment,
        };
      },
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }: { error: string }) => error,
    },
  },
});