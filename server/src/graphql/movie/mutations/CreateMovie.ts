import { GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId, toGlobalId } from "graphql-relay";
import { getContext } from "../../../getContext";

import movies from "../../../graphql/movie/MovieModel";
import { MovieEdge } from "../../../graphql/movie/MovieType";

export default mutationWithClientMutationId({
  name: "CreateMovie",
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
    }
  },
  mutateAndGetPayload: async ({ title, genre, image, description }, ctx) => {
    const context = await getContext(ctx);
    if (!context.user) {
      return { error: "You are not logged in. Please, sign in" };
    }

    const movieAlredyExists = await movies.findOne({ title: title });
    if (movieAlredyExists) {
      return {
        error: "Movie already exists",
      };
    }
    const movie = new movies({
      title: title,
      genre: genre,
      image: image,
      description: description,
    });
    movie.save((err) => {
      if (err) {
        return { error: err.message };
      }
    });
    return { movie: movie };
  },
  outputFields: {
    movieEdge: {
      type: MovieEdge,
      resolve: ({ movie }) => {
        if (!movie) {
          return null;
        }
        return {
          cursor: toGlobalId("Movie", movie.id),
          node: movie,
        };
      },
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }: { error: string }) => error,
    },
  },
});
