import { createClient } from 'graphql-ws';
import { Observable, RequestParameters, Variables } from 'relay-runtime';
import { getUserLocalStorage } from '../modules/auth/util';

export const setupSubscription = (
  request: RequestParameters,
  variables: Variables,
) => {
  const query = request.text;
  const authorization = getUserLocalStorage().token;
  console.log(authorization);

  const connectionParams = { authorization: '' };
  if (authorization) {
    connectionParams['authorization'] = authorization;
  }

  const subscriptionClient = createClient({
    url: process.env.SUBSCRIPTION_URL!,
    connectionParams: () => {
      if (!authorization) {
        return {};
      }
      return {
        Authorization: `Bearer ${authorization}`,
      };
    },
  });

  return Observable.create(sink => {
    if (!request.text) {
      return sink.error(new Error('Operation text cannot be empty'));
    }
    return subscriptionClient.subscribe(
      {
        operationName: request.name,
        query: query!,
        variables,
      },
      sink,
    );
  });
};
