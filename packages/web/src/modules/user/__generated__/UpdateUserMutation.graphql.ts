/**
 * @generated SignedSource<<59f93812a7c14ddef8cc95f39e23f831>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateUserMutation$variables = {
  email: string;
  name?: string | null;
  password?: string | null;
  recovery?: string | null;
};
export type UpdateUserMutation$data = {
  readonly UpdateUserMutation: {
    readonly error: string | null;
    readonly success: string | null;
  } | null;
};
export type UpdateUserMutation = {
  response: UpdateUserMutation$data;
  variables: UpdateUserMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "recovery"
},
v4 = [
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
            "name": "name",
            "variableName": "name"
          },
          {
            "kind": "Variable",
            "name": "password",
            "variableName": "password"
          },
          {
            "kind": "Variable",
            "name": "recovery",
            "variableName": "recovery"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "SimpleReturn",
    "kind": "LinkedField",
    "name": "UpdateUserMutation",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateUserMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "UpdateUserMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "b697008dbd175c151ea70f9c53ebbe05",
    "id": null,
    "metadata": {},
    "name": "UpdateUserMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateUserMutation(\n  $email: String!\n  $password: String\n  $name: String\n  $recovery: String\n) {\n  UpdateUserMutation(input: {email: $email, password: $password, name: $name, recovery: $recovery}) {\n    success\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "9c79fbe72fd2ef201f1a23aa0f279852";

export default node;
