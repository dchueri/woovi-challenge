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

beforeAll(connectMongoose);

beforeEach(clearDbAndRestartCounters);

afterAll(disconnectMongoose);

it("should be create one movie", async () => {
  const mutation = `
        mutation CreateMovie($input: CreateMovieInput!) {
            CreateMovie(input: $input) {
              movieEdge {
                node {
                  id
                  title
                  genre
                  image
                  description
                }
              }
              error
            }
          }
        `;

  const user = await createUser();
  const token = generateToken(user);
  let context: any = { user };
  context = {
    req: { headers: { authorization: `Bearer ${token}` } },
  };

  const contextValue = await getContext({ ...context });

  const variableValues = {
    input: {
      title: "test",
      genre: "test",
      image: "img",
      description: "some description",
      average: 3.5,
    },
  };
  const rootValue = {};

  const result = await graphql({
    schema,
    source: mutation,
    rootValue,
    contextValue,
    variableValues,
  });

  expect(result.data.CreateMovie.error).toBeNull();
  expect(result.data.CreateMovie.movieEdge.node).toBeTruthy();
  expect(sanitizeTestObject(result.data)).toMatchSnapshot();
});

it("should not be create a movie with incomplete input", async () => {
  const mutation = `
          mutation CreateMovie($input: CreateMovieInput!) {
              CreateMovie(input: $input) {
                movieEdge {
                  node {
                    id
                    title
                    genre
                    image
                    description
                    average
                  }
                }
                error
              }
            }
          `;

  const user = await createUser();
  const token = generateToken(user);
  let context: any = { user };
  context = {
    req: { headers: { authorization: `Bearer ${token}` } },
  };
  const contextValue = await getContext({ ...context });

  const variableValues = {
    input: { genre: "test", image: "img", description: "some description" },
  };
  const rootValue = {};

  const result = await graphql({
    schema,
    source: mutation,
    rootValue,
    contextValue,
    variableValues,
  });

  expect(result.errors).toBeDefined();
  expect(result.data).toBeUndefined();
  expect(sanitizeTestObject(result.data)).toMatchSnapshot();
});

it("should not be create one movie if no auth", async () => {
  const mutation = `
      mutation CreateMovie($input: CreateMovieInput!) {
          CreateMovie(input: $input) {
            movieEdge {
              node {
                id
                title
                genre
                image
                description
                average
              }
            }
            error
          }
        }
      `;
  const user = await createUser();
  const contextValue = await getContext({ user });

  const variableValues = {
    input: {
      title: "test",
      genre: "test",
      image: "img",
      description: "some description",
      average: 3.5,
    },
  };
  const rootValue = {};

  const result = await graphql({
    schema,
    source: mutation,
    rootValue,
    contextValue,
    variableValues,
  });

  expect(result.data.CreateMovie.movieEdge).toBeNull();
  expect(result.data.CreateMovie.error).toBeTruthy();
  expect(sanitizeTestObject(result.data)).toMatchSnapshot();
});
