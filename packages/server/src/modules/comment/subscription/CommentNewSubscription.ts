import { subscriptionWithClientId } from 'graphql-relay-subscription';

import { GraphQLContext } from '../../../graphql/types';
import pubSub, { EVENTS } from '../../../pubSub';
import * as CommentLoader from '../CommentLoader';
import CommentType from '../CommentType';

type CommentNew = {
  commentId: string;
};
const CommentNewSubscription = subscriptionWithClientId<
  CommentNew,
  GraphQLContext
>({
  name: 'CommentNew',
  inputFields: {},
  outputFields: {
    comment: {
      type: CommentType,
      resolve: async ({ id }: any, _, context) =>
        await CommentLoader.load(context, id),
    },
  },
  subscribe: (input, context) => {
    return pubSub.asyncIterator(EVENTS.COMMENT.NEW);
  },
  getPayload: (obj: CommentNew) => {
    return {
      id: obj.commentId,
    };
  },
});

export default CommentNewSubscription;
