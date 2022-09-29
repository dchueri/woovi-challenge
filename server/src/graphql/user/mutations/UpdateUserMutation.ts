import * as bcrypt from "bcrypt";
import { GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { UserUpdate } from "src/types/types";

import UserModel from "../UserModel";

export const UpdateUserMutation = mutationWithClientMutationId({
  name: "UpdateUser",
  inputFields: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    password: { type: GraphQLString },
    recovery: { type: GraphQLString },
  },
  mutateAndGetPayload: async ({ email, recovery, name, password }) => {
    const payload = { email } as UserUpdate;
    let user;

    if (password) {
      const hashPass = await bcrypt.hash(password, 10);
      payload.password = hashPass;
      payload.recovery = null;
    }

    if (recovery) {
      await UserModel.findOneAndUpdate(
        { email },
        { $set: { recovery } }
      );
      return;
    }

    if (name) {
      payload.name = name;
    }

    user = await UserModel.findOneAndUpdate(
      { email },
      { $set: { ...payload } }
    );

    if (!user) {
      return { error: "E-mail doesn't exists." };
    }

    return {
      success: `User updated ${user.name}.`,
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
