/**
 * @generated SignedSource<<4f308c7ba779e7512f589f71b748e6fd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type LoginMutation$variables = {
  email: string;
  password: string;
};
export type LoginMutation$data = {
  readonly LoginMutation: {
    readonly error: string | null;
    readonly me: {
      readonly email: string | null;
      readonly helperSeen: boolean | null;
      readonly id: string | null;
      readonly name: string | null;
    } | null;
    readonly token: string | null;
  } | null;
};
export type LoginMutation = {
  response: LoginMutation$data;
  variables: LoginMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password"
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
            "name": "email",
            "variableName": "email"
          },
          {
            "kind": "Variable",
            "name": "password",
            "variableName": "password"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "LoginOrRegister",
    "kind": "LinkedField",
    "name": "LoginMutation",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "helperSeen",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
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
    "name": "LoginMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "49ac32debc756e45d324be26d11d4d2f",
    "id": null,
    "metadata": {},
    "name": "LoginMutation",
    "operationKind": "mutation",
    "text": "mutation LoginMutation(\n  $email: String!\n  $password: String!\n) {\n  LoginMutation(input: {email: $email, password: $password}) {\n    token\n    me {\n      id\n      name\n      email\n      helperSeen\n    }\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "0789573f18bd596ff22d15f01e7dde58";

export default node;
