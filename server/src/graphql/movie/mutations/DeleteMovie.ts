import { GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import movies from "../MovieModel";

export default mutationWithClientMutationId({
  name: "DeleteMovie",
  inputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ id }) => {
    try {
      await movies.findOneAndDelete(id);
    } catch (e) {
      return e.message;
    }
  },
  outputFields: {
    error: {
      type: GraphQLString,
      resolve: ({ error }: { error: string }) => error,
    },
    success: {
      type: GraphQLString,
      resolve: ({ success }: { success: string }) => success,
    },
  },
});
