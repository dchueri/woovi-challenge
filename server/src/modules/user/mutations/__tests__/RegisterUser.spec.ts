import { graphql } from "graphql";
import {
  clearDbAndRestartCounters,
  connectMongoose,
  disconnectMongoose,
  sanitizeTestObject
} from "../../../../../test";
import { schema } from "../../../../schema";
import { createUser } from "../../fixture/createUser";

beforeAll(connectMongoose);

beforeEach(clearDbAndRestartCounters);

afterAll(disconnectMongoose);

it("should register a user", async () => {
  const mutation = `
  mutation RegisterUserMutation($input: UserRegisterInput!) {
    RegisterUserMutation(input: $input) {
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

  const variableValues = {
    input: { name: "test", email: "test@test.com", password: "123456" },
  };
  const rootValue = {};

  const result = await graphql({
    schema,
    source: mutation,
    rootValue,
    variableValues,
  });

  expect(result.errors).toBeUndefined();
  expect(result.data.RegisterUserMutation.error).toBeNull();
  expect(result.data.RegisterUserMutation.me.name).toEqual(
    variableValues.input.name
  );
  expect(sanitizeTestObject(result.data)).toMatchSnapshot();
});

it("should not register a user when email already exists", async () => {
  const mutation = `
  mutation RegisterUserMutation($input: UserRegisterInput!) {
    RegisterUserMutation(input: $input) {
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

  const user = await createUser();

  const variableValues = {
    input: { name: "test", email: user.email, password: "123456" },
  };
  const rootValue = {};

  const result = await graphql({
    schema,
    source: mutation,
    rootValue,
    variableValues,
  });

  expect(result.errors).toBeUndefined();
  expect(result.data.RegisterUserMutation.error).toBeTruthy();
  expect(result.data.RegisterUserMutation.me).toBeNull();
  expect(sanitizeTestObject(result.data)).toMatchSnapshot();
});

it("should not be register a user with incomplete input", async () => {
  const mutation = `
  mutation RegisterUserMutation($input: UserRegisterInput!) {
    RegisterUserMutation(input: $input) {
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

  const variableValues = {
    input: { email: "test@test.com", password: "123456" },
  };
  const rootValue = {};

  const result = await graphql({
    schema,
    source: mutation,
    rootValue,
    variableValues,
  });

  expect(result.errors).toBeTruthy();
  expect(result.data).toBeUndefined();
  expect(sanitizeTestObject(result.data)).toMatchSnapshot();
});
