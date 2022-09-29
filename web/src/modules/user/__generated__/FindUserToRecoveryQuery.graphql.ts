/**
 * @generated SignedSource<<50b4c95614162cbe21e1a047424d8f47>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type FindUserToRecoveryQuery$variables = {
  recoveryToken: string;
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
    "name": "recoveryToken"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "recoveryToken",
        "variableName": "recoveryToken"
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
    "cacheID": "243fa9097fb1602b083c699ee0a981e3",
    "id": null,
    "metadata": {},
    "name": "FindUserToRecoveryQuery",
    "operationKind": "query",
    "text": "query FindUserToRecoveryQuery(\n  $recoveryToken: String!\n) {\n  user(recoveryToken: $recoveryToken) {\n    id\n    name\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "5a8a53e37ed7821b7a8e862d03405beb";

export default node;
