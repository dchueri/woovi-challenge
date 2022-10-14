import { createClient } from 'graphql-ws';
import {
  Observable,
  RequestParameters,
  Variables
} from 'relay-runtime';
import { getUserLocalStorage } from '../modules/auth/util';

export const setupSubscription: any = (
  operation: RequestParameters,
  variables: Variables,
) => {
  const authorization = getUserLocalStorage().token;
  const connectionParams = { authorization: '' };

  if (authorization) {
    connectionParams['authorization'] = authorization;
  }

  const subscriptionsClient = createClient({
    url: process.env.SUBSCRIPTION_URL!,
    connectionParams: connectionParams,
  });

  return Observable.create(sink => {
    if (!operation.text) {
      return sink.error(new Error('Operation text cannot be empty'));
    }
    return subscriptionsClient.subscribe(
      {
        operationName: operation.name,
        query: operation.text,
        variables,
      },
      sink,
    );
  });
};
