import { GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId, toGlobalId } from "graphql-relay";
import { getContext } from "../../../getContext";
import movies from "../MovieModel";
import { MovieEdge } from "../MovieType";

export default mutationWithClientMutationId({
  name: "UpdateMovie",
  inputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    genre: {
      type: new GraphQLNonNull(GraphQLString),
    },
    image: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ id, title, genre }, ctx) => {
    const context = await getContext(ctx);
    if (!context.user) {
      return { error: "You are not logged in. Please, sign in" };
    }

    const movie = await movies
      .findOneAndUpdate({ _id: id }, { title, genre })
      .then((movie) => {
        console.log(movie.id);
        return {
          movie: {
            id: movie.id,
            title: movie.title,
            genre: movie.genre,
            image: movie.image,
          },
        };
      })
      .catch((e) => {
        return { error: "Movie not found" };
      });
    return movie;
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
