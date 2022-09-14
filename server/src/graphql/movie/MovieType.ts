import { GraphQLObjectType, GraphQLString } from "graphql";
import { connectionDefinitions, globalIdField } from "graphql-relay";

const MovieType = new GraphQLObjectType({
  name: "Movie",
  description: "Movie Type",
  fields: () => ({
    id: globalIdField("Movie"),
    title: {
      type: GraphQLString,
      resolve: (movie) => movie.title,
    },
    genre: {
      type: GraphQLString,
      resolve: (movie) => movie.genre,
    },
  }),
});

const { connectionType: MovieConnection, edgeType: MovieEdge } =
  connectionDefinitions({
    nodeType: MovieType,
  });

export { MovieConnection, MovieEdge };

export default MovieType;
