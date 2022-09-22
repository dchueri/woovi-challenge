import { GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId, toGlobalId } from "graphql-relay";
import { verify } from "jsonwebtoken";
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
  },
  mutateAndGetPayload: async ({ id, title, genre }, ctx) => {
    const header = ctx.request.header.authorization;

    if (!header) {
      return { error: "You are not logged in. Please, sign in" };
    }
    const token = header.split(" ");
    const verifyJWT = verify(token[1], process.env.JWT_SECRET);
    if (!verifyJWT) {
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
