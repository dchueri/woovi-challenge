/**
 * @generated SignedSource<<3cba7e123dbf9fb0794d20c9a7bc6a1d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type FindUserToRecoveryQuery$variables = {
  recovery: string;
};
export type FindUserToRecoveryQuery$data = {
  readonly user: {
    readonly email: string | null;
    readonly id: string | null;
    readonly name: string | null;
  } | null;
};
export type FindUserToRecoveryQuery = {
  response: FindUserToRecoveryQuery$data;
  variables: FindUserToRecoveryQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "recovery"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "recovery",
        "variableName": "recovery"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
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
    "name": "FindUserToRecoveryQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FindUserToRecoveryQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8ef7dad8eb3a4185b4e9aa9849ce5dcb",
    "id": null,
    "metadata": {},
    "name": "FindUserToRecoveryQuery",
    "operationKind": "query",
    "text": "query FindUserToRecoveryQuery(\n  $recovery: String!\n) {\n  user(recovery: $recovery) {\n    id\n    name\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "7e4b67b040b67a9b3124a655010eb161";

export default node;
