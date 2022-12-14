import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import movies from '../MovieModel';

export default mutationWithClientMutationId({
  name: 'DeleteMovie',
  inputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    nodeId: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ id, nodeId }, context) => {
    if (!context.user) {
      return { error: 'You are not logged in. Please, sign in' };
    }

    const deletedMovie = await movies.findOneAndDelete({ _id: id });
    if (deletedMovie) {
      return { deletedId: nodeId };
    }
    return { error: 'Movie does not exist' };
  },
  outputFields: {
    error: {
      type: GraphQLString,
      resolve: ({ error }: { error: string }) => error,
    },
    deletedId: {
      type: GraphQLID,
      resolve: ({ deletedId }) => deletedId,
    },
  },
});
