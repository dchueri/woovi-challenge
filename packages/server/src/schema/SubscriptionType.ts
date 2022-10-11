import { GraphQLObjectType } from 'graphql';

import MovieNew from '../modules/movie/subscription/MovieNewSubscription';

const SubscriptionType = new GraphQLObjectType({
  name: 'Subscription',
  fields: {
    MovieNew: MovieNew as any,
  },
});

export default SubscriptionType;
