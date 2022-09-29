import { connectionDefinitions } from "@entria/graphql-mongo-helpers";
import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { globalIdField } from "graphql-relay";

import { nodeInterface, registerTypeLoader } from "../typeRegister";

import { IUser } from "../../types/types";
import { load } from "./UserLoader";

export const UserType = new GraphQLObjectType<IUser>({
  name: "User",
  fields: () => ({
    id: globalIdField("User"),
    name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (user) => user.name,
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (user) => user.email,
    },
    recovery: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (user) => user.recovery,
    },
  }),
  interfaces: () => [nodeInterface],
});

export const UserConnection = connectionDefinitions({
  name: "UserConnection",
  nodeType: UserType,
});

registerTypeLoader(UserType, load);
