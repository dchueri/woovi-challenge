import * as bcrypt from "bcrypt";
import { GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import UserModel from "../UserModel";

export const UpdateUserMutation = mutationWithClientMutationId({
  name: "UpdateUser",
  inputFields: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    password: { type: GraphQLString },
    recoveryToken: { type: GraphQLString },
  },
  mutateAndGetPayload: async ({ email, recoveryToken, name, password }) => {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return { error: "E-mail doesn't exists." };
    }

    user.recovery = recoveryToken;

    if (name) {
      user.name = name;
    }
    if (password) {
      const hashPass = await bcrypt.hash(password, 10);
      user.password = hashPass;
    }
    
    await user.save();

    return {
      success: `User updated.`,
    };
  },
  outputFields: {
    success: {
      type: GraphQLString,
      resolve: ({ success }: { success: string }) => success,
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }: { error: string }) => error,
    },
  },
});
