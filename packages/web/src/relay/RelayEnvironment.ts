import {
  Environment, FetchFunction, Network,
  RecordSource,
  Store
} from 'relay-runtime';

import { fetchGraphQL } from './fetchGraphQL';
import { setupSubscription } from './setupSubscription';

const fetchRelay: FetchFunction = async (params, variables) =>
  fetchGraphQL(params.text as string, variables);

export const RelayEnvironment = new Environment({
  network: Network.create(fetchRelay, setupSubscription),
  store: new Store(new RecordSource()),
});
