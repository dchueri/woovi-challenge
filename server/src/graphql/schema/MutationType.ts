import { GraphQLObjectType } from "graphql";
import MovieMutations from "../../graphql/movie/mutations";
import UserMutations from "../user/mutations";

const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    ...MovieMutations,
    ...UserMutations,
  }),
});

export default MutationType;
