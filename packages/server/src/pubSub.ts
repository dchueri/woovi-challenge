import { PubSub } from 'graphql-subscriptions';

export const EVENTS = {
  MOVIE: {
    NEW: 'MOVIE_NEW',
  },
};

export default new PubSub();
