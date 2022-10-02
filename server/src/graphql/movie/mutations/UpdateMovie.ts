import { GraphQLFloat, GraphQLNonNull, GraphQLString } from "graphql";
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
      type: GraphQLString,
    },
    genre: {
      type: GraphQLString,
    },
    image: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    average: {
      type: GraphQLFloat,
    },
  },
  mutateAndGetPayload: async (
    { id, title, genre, image, description, average },
    ctx
  ) => {
    const context = await getContext(ctx);
    if (!context.user) {
      return { error: "You are not logged in. Please, sign in" };
    }

    const movie = await movies
      .findOneAndUpdate(
        { _id: id },
        { title, genre, image, description, average }
      )
      .then((movie) => {
        return {
          movie: {
            id: movie.id,
            title: movie.title,
            genre: movie.genre,
            image: movie.image,
            description: movie.description,
            average: movie.average,
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
