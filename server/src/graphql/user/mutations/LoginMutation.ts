import * as bcrypt from "bcrypt";
import { GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import UserModel from "../UserModel";
import { UserType } from "../UserType";

import { generateToken } from "../../../auth";

export const LoginMutation = mutationWithClientMutationId({
  name: "UserLogin",
  inputFields: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  mutateAndGetPayload: async ({ email, password }) => {
    try {
      const user = await UserModel.findOne({ email });
      const isValidPassword = await bcrypt.compareSync(password, user.password);
      if (!user || !isValidPassword) {
        throw new Error("User or password is invalid. Please, try again");
      }

      const token = generateToken(user._id);

      return {
        token,
        user,
      };
    } catch (e) {
      console.log(e);
    }
  },
  outputFields: {
    token: {
      type: GraphQLString,
      resolve: ({ token }) => token,
    },
    me: {
      type: UserType,
      resolve: ({ user }) => user,
    },
  },
});
