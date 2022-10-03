import * as bcrypt from "bcrypt";
import { GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { generateToken } from "../../../auth";

import UserModel from "../UserModel";
import { UserType } from "../UserType";

export const RegisterUserMutation = mutationWithClientMutationId({
  name: "UserRegister",
  inputFields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  mutateAndGetPayload: async ({ email, name, password }) => {
    try {
      const hasUser =
        (await UserModel.countDocuments({ email: email.trim() })) > 0;

      if (hasUser) {
        throw new Error("This email has been registered. Please try again!");
      }
      const hashPass = await bcrypt.hash(password, 10);
      password = hashPass;
      const user = new UserModel({
        name,
        password,
        email,
      });

      await user.save();

      const createdUser = await UserModel.findById(user.id);

      const token = generateToken(createdUser.id);
      
      return {
        me: createdUser,
        success: "User has registered with success",
        token,
      };
    } catch (e) {
      return { error: e.message };
    }
  },
  outputFields: {
    token: {
      type: GraphQLString,
      resolve: ({ token }) => token,
    },
    me: {
      type: UserType,
      resolve: ({ me }) => me,
    },
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