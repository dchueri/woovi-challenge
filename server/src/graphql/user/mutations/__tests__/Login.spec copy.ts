import * as bcrypt from "bcrypt";
import { graphql } from "graphql";
import {
  clearDbAndRestartCounters,
  connectMongoose,
  disconnectMongoose,
  sanitizeTestObject
} from "../../../../../test";
import { schema } from "../../../schema";
import { createUser } from "../../fixture/createUser";

beforeAll(connectMongoose);

beforeEach(clearDbAndRestartCounters);

afterAll(disconnectMongoose);

it("should login a user", async () => {
  const mutation = `
  mutation LoginMutation($input: UserLoginInput!) {
    LoginMutation(input: $input) {
      token
      me {
        id
        name
        email
      }
    }
  }
  `;

  const hashPass = await bcrypt.hash("123456", 10);
  const user = await createUser({ password: hashPass });

  const variableValues = {
    input: { email: user.email, password: "123456" },
  };
  const rootValue = {};

  const result = await graphql({
    schema,
    source: mutation,
    rootValue,
    variableValues,
  });

  expect(result.errors).toBeUndefined();
  expect(result.data.LoginMutation.token).toBeDefined();
  expect(result.data.LoginMutation.me).toBeDefined();
  expect(sanitizeTestObject(result.data)).toMatchSnapshot();
});

it("should not login with wrong password", async () => {
  const mutation = `
  mutation LoginMutation($input: UserLoginInput!) {
    LoginMutation(input: $input) {
      token
      me {
        id
        name
        email
      }
      error
    }
  }
  `;

  const hashPass = await bcrypt.hash("123456", 10);
  const user = await createUser({ password: hashPass });

  const variableValues = {
    input: { email: user.email, password: "worng" },
  };
  const rootValue = {};

  const result = await graphql({
    schema,
    source: mutation,
    rootValue,
    variableValues,
  });

  expect(result.data.LoginMutation.error).toBeDefined();
  expect(result.data.LoginMutation.token).toBeNull();
  expect(sanitizeTestObject(result.data)).toMatchSnapshot();
});