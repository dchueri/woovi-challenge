import { PubSub } from 'graphql-subscriptions';

export const EVENTS = {
  COMMENT: {
    NEW: 'COMMENT_NEW',
  },
};

export default new PubSub();