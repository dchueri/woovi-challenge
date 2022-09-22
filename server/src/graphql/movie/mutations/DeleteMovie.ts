import { GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { verify } from "jsonwebtoken";
import movies from "../MovieModel";

export default mutationWithClientMutationId({
  name: "DeleteMovie",
  inputFields: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ id }, ctx) => {
    const header = ctx.request.header.authorization;

    if (!header) {
      return { error: "You are not logged in. Please, sign in" };
    }
    const token = header.split(" ");
    const verifyJWT = verify(token[1], process.env.JWT_SECRET);
    if (!verifyJWT) {
      return { error: "You are not logged in. Please, sign in" };
    }
    const deletedMovie = await movies.findByIdAndDelete({ _id: id });
    if (deletedMovie) {
      return { success: true };
    }
    return { error: "Movie does not exist" };
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
