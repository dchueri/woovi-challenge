/**
 * @generated SignedSource<<2e0d8a3820ff450c1ea654079ef5e703>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteMovieMutation$variables = {
  id: string;
};
export type DeleteMovieMutation$data = {
  readonly DeleteMovie: {
    readonly error: string | null;
  } | null;
};
export type DeleteMovieMutation = {
  response: DeleteMovieMutation$data;
  variables: DeleteMovieMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "DeleteMovie",
    "kind": "LinkedField",
    "name": "DeleteMovie",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "error",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteMovieMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteMovieMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "239bb6ffd37d006dd952623cbc193050",
    "id": null,
    "metadata": {},
    "name": "DeleteMovieMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteMovieMutation(\n  $id: String!\n) {\n  DeleteMovie(input: {id: $id}) {\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "c957aaebcdc3b0c20d728035e6357b2c";

export default node;
