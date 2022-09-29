import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { connectionArgs, connectionFromArray } from "graphql-relay";
import * as MovieLoader from "../../graphql/movie/MovieLoader";
import { MovieConnection } from "../../graphql/movie/MovieType";
import { getByRecoveryToken } from "../user/UserLoader";
import { UserType } from "../user/UserType";

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
        recoveryToken: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: async (_, args) => {
        const user = await getByRecoveryToken(args.recoveryToken);
        return { id: user.id, name: user.name, email: user.email };
      },
    },
  }),
});

export default QueryType;
