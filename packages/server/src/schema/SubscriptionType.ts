import { GraphQLObjectType } from 'graphql';

import CommentNew from '../modules/comment/subscription/CommentNewSubscription';

const SubscriptionType = new GraphQLObjectType({
  name: 'Subscription',
  fields: {
    CommentNew: CommentNew as any,
  },
});

export default SubscriptionType;
