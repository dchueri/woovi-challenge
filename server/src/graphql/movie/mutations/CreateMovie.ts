import { GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId, toGlobalId } from "graphql-relay";
import { verify } from "jsonwebtoken";
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
  },
  mutateAndGetPayload: async ({ title, genre }, ctx) => {
    const header = ctx.request.header.authorization;

    if (!header) {
      return { error: "You are not logged in. Please, sign in" };
    }
    const token = header.split(" ");
    const verifyJWT = verify(token[1], process.env.JWT_SECRET);
    if (!verifyJWT) {
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
