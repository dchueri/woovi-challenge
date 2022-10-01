/* const EasyGraphQLTester = require("easygraphql-tester");
import { graphql } from "graphql";
import { MongoClient } from "mongodb";
import { schema } from "../../../schema";
const fs = require("fs");
const path = require("path");

//const userSchema = fs.readFileSync(path.join(__dirname, 'schema', 'user.gql'), 'utf8')

const tester = new EasyGraphQLTester(schema);

describe("insert", () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await await MongoClient.connect(global.__MONGO_URI__);
    db = await connection.db();
  });

  afterAll(async () => {
    await connection.close();
  });

  it("should create a user", async () => {
    const users = db.collection("JestUsers");

    const mutation = `
      mutation RegisterUserMutation($name: String!, $email: String!, $password: String!) {
        RegisterUserMutation(input: {name: $name, email: $email, password: $password}) {
          token
          me {
            name
            email
          }
        }
      }
    `;

    const mockUser = {
      name: "Test",
      email: "test@test.com",
      password: "123456",
    };

    const result = await graphql({
      schema: schema,
      source: mutation,
      variableValues: { ...mockUser },
    });
    console.log(result);

    expect(result.data.me).toBeDefined();
  });
}); */

/* import { graphql } from "graphql";

import {
  connectWithMongoose,
  disconnectWithMongoose
} from "../../../../../test";
import { schema } from "../../../schema";

beforeAll(connectWithMongoose);
afterAll(disconnectWithMongoose);

it("should create a new user", async () => {
  const mutation = `
      mutation RegisterUserMutation($name: String!, $email: String!, $password: String!) {
        RegisterUserMutation(input: {name: $name, email: $email, password: $password}) {
          token
          me {
            id
            name
            email
          }
        }
      }
    `;

  const rootValue = {};

  const variableValues = {
    name: "test",
    email: "test@test.com",
    password: "123456",
  };

  const result = await graphql({
    schema,
    source: mutation,
    rootValue,
    variableValues,
  });

  console.log(result)
  expect(result.errors).toBeUndefined();

  const { me, token } = result?.data?.registerUserMutation as any;

  expect(token).toBeDefined();
  expect(me.id).toBeDefined();
}); */

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
