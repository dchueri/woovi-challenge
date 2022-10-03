import { GraphQLObjectType } from "graphql";
import MovieMutations from "../../modules/movie/mutations";
import UserMutations from "../../modules/user/mutations";

const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    ...MovieMutations,
    ...UserMutations,
  }),
});

export default MutationType;
