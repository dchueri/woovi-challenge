import { GraphQLFloat, GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId, toGlobalId } from 'graphql-relay';

import { errorField, successField } from '@entria/graphql-mongo-helpers';

import MovieModel from '../MovieModel';

import * as MovieLoader from '../MovieLoader';
import { MovieConnection } from '../MovieType';

import { Double } from 'typeorm';
import { GraphQLContext } from '../../../graphql/types';
import pubSub, { EVENTS } from '../../../pubSub';

type Args = {
  title: string;
  genre: string;
  image: string;
  description: string;
  average: Double;
};
const mutation = mutationWithClientMutationId({
  name: 'MovieCreate',
  inputFields: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    genre: {
      type: new GraphQLNonNull(GraphQLString),
    },
    image: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    average: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
  },
  mutateAndGetPayload: async (args: Args, context: GraphQLContext) => {
    const { title, genre, image, description, average } = args;

    if (!context.user) {
      return {
        error: 'user not logged',
      };
    }

    const movie = await new MovieModel({
      title,
      genre,
      image,
      description,
      average,
      author: context.user._id,
    }).save();

    await pubSub.publish(EVENTS.MOVIE.NEW, { movieId: movie._id });

    return {
      id: movie._id,
      error: null,
    };
  },
  outputFields: {
    movieEdge: {
      type: MovieConnection.edgeType,
      resolve: async ({ id }, _, context) => {
        const movie = await MovieLoader.load(context, id);

        if (!movie) {
          return null;
        }

        return {
          cursor: toGlobalId('Movie', movie._id),
          node: movie,
        };
      },
    },
    ...errorField,
    ...successField,
  },
});

export default mutation;
