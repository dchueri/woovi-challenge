import { graphql } from 'graphql';

import { schema } from '..';
import { clearDbAndRestartCounters, connectMongoose, disconnectMongoose, sanitizeTestObject } from '../../../test';
import { getContext } from '../../getContext';
import { createUser } from '../../modules/user/fixture/createUser';

beforeAll(connectMongoose);

beforeEach(clearDbAndRestartCounters);

afterAll(disconnectMongoose);

it('should return logged user', async () => {
  const user = await createUser();

  // language=GraphQL
  const query = `
    query Q {
      me {
        name
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
  expect(result.data.me).not.toBe(null);
  expect(result.data.me.name).toBe(user.name);
  expect(sanitizeTestObject(result)).toMatchSnapshot();
});
