import { GraphQLObjectType, GraphQLString } from "graphql";
import { connectionDefinitions } from "graphql-relay";

const MovieType = new GraphQLObjectType({
  name: "Movie",
  description: "Movie Type",
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: (movie) => movie._id,
    },
    title: {
      type: GraphQLString,
      resolve: (movie) => movie.title,
    },
    genre: {
      type: GraphQLString,
      resolve: (movie) => movie.genre,
    },
    image: {
      type: GraphQLString,
      resolve: (movie) => movie.image,
    },
    description: {
      type: GraphQLString,
      resolve: (movie) => movie.description,
    },
  }),
});

const { connectionType: MovieConnection, edgeType: MovieEdge } =
  connectionDefinitions({
    nodeType: MovieType,
  });

export { MovieConnection, MovieEdge };

export default MovieType;
