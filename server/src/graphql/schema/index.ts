import { GraphQLSchema } from "graphql";
import MutationType from "../../graphql/schema/MutationType";
import QueryType from "../../graphql/schema/QueryType";

export const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
