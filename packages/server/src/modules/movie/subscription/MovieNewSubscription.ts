import { subscriptionWithClientId } from 'graphql-relay-subscription';

import { GraphQLContext } from '../../../graphql/types';
import pubSub, { EVENTS } from '../../../pubSub';
import MovieModel from '../MovieModel';
import MovieType from '../MovieType';

type MovieNew = {
  movieId: string;
};
const MovieNewSubscription = subscriptionWithClientId<MovieNew, GraphQLContext>({
  name: 'MovieNew',
  inputFields: {},
  outputFields: {
    movie: {
      type: MovieType,
      resolve: async ({ id }: any, _, context) => {
        const result = await MovieModel.findById(id);
        return result;
      },
    },
  },
  subscribe: (input, context) => {
    return pubSub.asyncIterator(EVENTS.MOVIE.NEW);
  },
  getPayload: (obj: MovieNew) => {
    return {
      id: obj.movieId,
    };
  },
});

export default MovieNewSubscription;
