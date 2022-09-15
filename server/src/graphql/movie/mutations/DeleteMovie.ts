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
    const deletedMovie = await movies.findByIdAndDelete({ _id: id });
    if (deletedMovie) {
      return { success: true };
    }
    return { error: 'Movie does not exist' };
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
