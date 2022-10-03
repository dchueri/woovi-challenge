import { graphql } from "graphql";
import { createUser } from "../../../user/fixture/createUser";

import {
  clearDbAndRestartCounters,
  connectMongoose,
  disconnectMongoose,
  sanitizeTestObject
} from "../../../../../test";
import { getContext } from "../../../../getContext";
import { schema } from "../../../../graphql/schema";
import { createMovie } from "../../fixture/createMovie";

beforeAll(connectMongoose);

beforeEach(clearDbAndRestartCounters);

afterAll(disconnectMongoose);

it("should be return all movies", async () => {
  const query = `
    query Q {
      movies {
        edges {
          node {
            title
          }
        }
      }
    }
  `;

  const user = await createUser();
  const contextValue = await getContext({ user });

  await createMovie();

  const rootValue = {};
  const variableValues = {};

  const result = await graphql({
    schema,
    source: query,
    rootValue,
    contextValue,
    variableValues,
  });

  expect(result.errors).toBeUndefined();
  expect(result.data.movies.edges.length).toBe(1);
  expect(sanitizeTestObject(result.data)).toMatchSnapshot();
});

it("should be return an empty movies list", async () => {
  const query = `
    query Q {
      movies {
        edges {
          node {
            title
          }
        }
      }
    }
  `;

  const user = await createUser();
  const contextValue = await getContext({ user });

  const rootValue = {};
  const variableValues = {};

  const result = await graphql({
    schema,
    source: query,
    rootValue,
    contextValue,
    variableValues,
  });

  expect(result.errors).toBeUndefined();
  expect(result.data.movies.edges.length).toBe(0);
  expect(sanitizeTestObject(result.data)).toMatchSnapshot();
});
