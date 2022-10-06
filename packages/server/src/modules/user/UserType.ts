import { connectionDefinitions } from "@entria/graphql-mongo-helpers";
import {
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString
} from "graphql";
import { globalIdField } from "graphql-relay";

import { nodeInterface, registerTypeLoader } from "../node/typeRegister";

import { IUser } from "../../types";
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
    helperSeen: {
      type: GraphQLBoolean,
      resolve: (user) => user.helperSeen,
    },
  }),
  interfaces: () => [nodeInterface],
});

export const { connectionType: UserConnection, edgeType: UserEdge } =
  connectionDefinitions({
    nodeType: UserType,
  });

registerTypeLoader(UserType, load);
