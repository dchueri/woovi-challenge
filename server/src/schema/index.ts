import { GraphQLSchema } from "graphql";
import MutationType from "./MutationType";
import QueryType from "./QueryType";

export const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
