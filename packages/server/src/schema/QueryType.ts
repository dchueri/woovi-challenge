import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { connectionArgs, connectionFromArray } from "graphql-relay";
import * as MovieLoader from "../modules/movie/MovieLoader";
import { MovieConnection } from "../modules/movie/MovieType";
import { getByRecoveryToken } from "../modules/user/UserLoader";
import { UserType } from "../modules/user/UserType";

const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root query",
  fields: () => ({
    movies: {
      type: new GraphQLNonNull(MovieConnection),
      args: connectionArgs,
      resolve: async (_, args) => {
        const data = await MovieLoader.getAll();
        return connectionFromArray(data, args);
      },
    },
    user: {
      type: UserType,
      args: {
        recovery: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: async (_, args) => {
        const user = await getByRecoveryToken(args.recovery);
        return { id: user.id, name: user.name, email: user.email };
      },
    },
  }),
});

export default QueryType;
