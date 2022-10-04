import { GraphQLObjectType } from "graphql";
import CommentCreateMutation from "../modules/comment/mutation";
import MovieMutations from "../modules/movie/mutations";
import UserMutations from "../modules/user/mutations";

const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    ...MovieMutations,
    ...UserMutations,
    ...CommentCreateMutation,
  }),
});

export default MutationType;
