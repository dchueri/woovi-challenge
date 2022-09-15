import { GraphQLObjectType } from "graphql";
import MovieMutations from "../../graphql/movie/mutations";

const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    ...MovieMutations,
  }),
});

export default MutationType;
