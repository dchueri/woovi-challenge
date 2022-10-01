import { graphql } from "graphql";
import { createUser } from "../../../user/fixture/createUser";

import {
    clearDbAndRestartCounters,
    connectMongoose,
    disconnectMongoose,
    sanitizeTestObject
} from "../../../../../test";
import { generateToken } from "../../../../auth";
import { getContext } from "../../../../getContext";
import { schema } from "../../../schema";
import { createMovie } from "../../fixture/createMovie";

beforeAll(connectMongoose);

beforeEach(clearDbAndRestartCounters);

afterAll(disconnectMongoose);

it("should be delete a movie", async () => {
  const mutation = `
    mutation DeleteMovie($input: DeleteMovieInput!) {
      DeleteMovie(input: $input) {
        deletedId
        error
      }
    }
        `;

  const user = await createUser();
  const token = generateToken(user);
  const rootValue = {};
  let context: any = { user };
  context = {
    req: { headers: { authorization: `Bearer ${token}` } },
  };
  const contextValue = await getContext({ ...context });

  const movie = await createMovie();

  const variableValues = {
    input: { id: movie.id },
  };

  const result = await graphql({
    schema,
    source: mutation,
    rootValue,
    contextValue,
    variableValues,
  });

  expect(result.data.DeleteMovie.error).toBeNull();
  expect(result.data.DeleteMovie.deletedId).toEqual(movie.id);
  expect(sanitizeTestObject(result.data)).toMatchSnapshot();
});

it("should not be delete a movie without id input", async () => {
  const mutation = `
    mutation DeleteMovie($input: DeleteMovieInput!) {
      DeleteMovie(input: $input) {
        deletedId
        error
      }
    }
        `;

  const user = await createUser();
  const token = generateToken(user);
  const rootValue = {};
  let context: any = { user };
  context = {
    req: { headers: { authorization: `Bearer ${token}` } },
  };
  const contextValue = await getContext({ ...context });

  await createMovie();

  const result = await graphql({
    schema,
    source: mutation,
    rootValue,
    contextValue,
  });

  expect(result.errors).toBeDefined();
  expect(result.data).toBeUndefined();
  expect(sanitizeTestObject(result.data)).toMatchSnapshot();
});

it("should not be delete a movie with invalid id", async () => {
  const mutation = `
      mutation DeleteMovie($input: DeleteMovieInput!) {
        DeleteMovie(input: $input) {
          deletedId
          error
        }
      }
          `;

  const user = await createUser();
  const token = generateToken(user);
  const rootValue = {};
  let context: any = { user };
  context = {
    req: { headers: { authorization: `Bearer ${token}` } },
  };
  const contextValue = await getContext({ ...context });

  const variableValues = { input: { id: "invalidId" } };
  await createMovie();

  const result = await graphql({
    schema,
    source: mutation,
    rootValue,
    contextValue,
    variableValues,
  });

  expect(result.errors).toBeDefined();
  expect(result.data.DeleteMovie).toBeNull();
  expect(sanitizeTestObject(result.data)).toMatchSnapshot();
});

it("should not be delete a movie without auth", async () => {
  const mutation = `
      mutation DeleteMovie($input: DeleteMovieInput!) {
        DeleteMovie(input: $input) {
          deletedId
          error
        }
      }
          `;
  const rootValue = {};
  const movie = await createMovie();

  const variableValues = {
    input: { id: movie.id },
  };

  const result = await graphql({
    schema,
    source: mutation,
    rootValue,
    variableValues,
  });

  expect(result.errors).toBeDefined();
  expect(result.data.DeleteMovie).toBeNull();
  expect(sanitizeTestObject(result.data)).toMatchSnapshot();
});
