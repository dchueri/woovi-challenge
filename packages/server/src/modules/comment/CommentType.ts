import { GraphQLObjectType, GraphQLString } from "graphql";
import { globalIdField } from "graphql-relay";

import {
  connectionDefinitions,
  timestampResolver
} from "@entria/graphql-mongo-helpers";

import { nodeInterface, registerTypeLoader } from "../node/typeRegister";

import { GraphQLContext } from "../../graphql/types";
import * as MovieLoader from "../movie/MovieLoader";
import * as UserLoader from "../user/UserLoader";
import { UserType } from "../user/UserType";

import { IComment } from "src/types";
import MovieType from "../movie/MovieType";
import { load } from "./CommentLoader";

const CommentType = new GraphQLObjectType<IComment, GraphQLContext>({
  name: "Comment",
  description: "Comment data",
  fields: () => ({
    id: globalIdField("Comment"),
    text: {
      type: GraphQLString,
      resolve: (comment) => comment.text,
    },
    user: {
      type: UserType,
      resolve: (comment, _, context) => UserLoader.load(context, comment.user),
    },
    movie: {
      type: MovieType,
      resolve: (comment, _, context) =>
        MovieLoader.load(context, comment.movie),
    },
    ...timestampResolver,
  }),
  interfaces: () => [nodeInterface],
});

export default CommentType;

registerTypeLoader(CommentType, load);

export const CommentConnection = connectionDefinitions({
  name: "Comment",
  nodeType: CommentType,
});
