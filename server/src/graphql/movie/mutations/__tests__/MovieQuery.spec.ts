import { graphql } from "graphql";
import { createUser } from "../../../user/fixture/createUser";

import {
    clearDbAndRestartCounters,
    connectMongoose,
    disconnectMongoose,
    sanitizeTestObject
} from "../../../../../test";
import { getContext } from "../../../../getContext";
import { schema } from "../../../schema";
import { createMovie } from "../../fixture/createMovie";

beforeAll(connectMongoose);

beforeEach(clearDbAndRestartCounters);

afterAll(disconnectMongoose);

it("should be return all movies", async () => {
  const user = await createUser();

  await createMovie();

  // language=GraphQL
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

  const rootValue = {};
  const contextValue = await getContext({ user });
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
