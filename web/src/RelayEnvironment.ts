import { Environment, Network, RecordSource, Store } from "relay-runtime";

const fetchQuery = (operation: any, variables: any) => {
  return fetch("http://localhost:4000/", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
};

export default new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});
