import { GraphQLNonNull, GraphQLObjectType } from "graphql";
import { connectionArgs, connectionFromArray } from "graphql-relay";
import * as MovieLoader from "../movie/MovieLoader";
import { MovieConnection } from "../movie/MovieType";

const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root query",
  fields: () => ({
    movies: {
      type: new GraphQLNonNull(MovieConnection),
      args: connectionArgs,
      resolve: async (_, args, context) => {
        const data = await MovieLoader.getAll();
        return connectionFromArray(data, args);
      },
    },
  }),
});

export default QueryType;
