import { Variables } from 'relay-runtime';
import { getUserLocalStorage } from '../modules/auth/util';

export const fetchGraphQL = async (query: string, variables: Variables) => {
  let jwt = getUserLocalStorage();
  if (!jwt) {
    jwt = { token: '' };
  }

  const response = await fetch(process.env.URL!.toString(), {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt.token}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const data = await response.json();

  return data;
};
