import { graphql } from "graphql";
import {
  clearDbAndRestartCounters,
  connectMongoose,
  disconnectMongoose,
  sanitizeTestObject
} from "../../../../../test";
import { schema } from "../../../../graphql/schema";
import { createUser } from "../../fixture/createUser";

beforeAll(connectMongoose);

beforeEach(clearDbAndRestartCounters);

afterAll(disconnectMongoose);

it("should update a user", async () => {
  const mutation = `
  mutation UpdateUserMutation($input: UpdateUserInput!) {
    UpdateUserMutation(input: $input) {
      success
      error
    }
  }
  `;

  const user = await createUser();

  const variableValues = {
    input: { email: user.email, name: "updated" },
  };
  const rootValue = {};

  const result = await graphql({
    schema,
    source: mutation,
    rootValue,
    variableValues,
  });

  expect(result.errors).toBeUndefined();
  expect(result.data.UpdateUserMutation.error).toBeNull();
  expect(result.data.UpdateUserMutation.success).toBeTruthy();
  expect(sanitizeTestObject(result.data)).toMatchSnapshot();
});

it("should not update a user with invalid email", async () => {
  const mutation = `
  mutation UpdateUserMutation($input: UpdateUserInput!) {
    UpdateUserMutation(input: $input) {
      success
      error
    }
  }
  `;

  const user = await createUser();

  const variableValues = {
    input: { email: 'invalid@invalid.com', name: "updated" },
  };
  const rootValue = {};

  const result = await graphql({
    schema,
    source: mutation,
    rootValue,
    variableValues,
  });

  expect(result.errors).toBeUndefined();
  expect(result.data.UpdateUserMutation.error).toBeTruthy();
  expect(result.data.UpdateUserMutation.success).toBeNull();
  expect(sanitizeTestObject(result.data)).toMatchSnapshot();
});

