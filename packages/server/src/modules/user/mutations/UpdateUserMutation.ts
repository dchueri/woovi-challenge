import * as bcrypt from "bcrypt";
import { GraphQLBoolean, GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import UserModel from "../UserModel";

export interface UserUpdate extends Document {
  email: string;
  name?: string;
  password?: string;
  recovery?: string | null;
  helperSeen?: boolean;
}

export default mutationWithClientMutationId({
  name: "UpdateUser",
  inputFields: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    password: { type: GraphQLString },
    recovery: { type: GraphQLString },
    helperSeen: { type: GraphQLBoolean },
  },
  mutateAndGetPayload: async ({
    email,
    recovery,
    name,
    password,
    helperSeen,
  }) => {
    const payload = { email } as UserUpdate;
    let user;

    if (helperSeen) {
      await UserModel.findOneAndUpdate({ email }, { $set: { helperSeen } });
      return {
        success: `helper status defined`,
      };
    }

    if (recovery) {
      await UserModel.findOneAndUpdate({ email }, { $set: { recovery } });
      return {
        success: `recovery token defined`,
      };
    }

    if (name) {
      payload.name = name;
    }

    if (password) {
      const hashPass = await bcrypt.hash(password, 10);
      payload.password = hashPass;
      payload.recovery = null;
    }

    user = await UserModel.findOneAndUpdate(
      { email },
      { $set: { ...payload } },
      { new: true }
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
