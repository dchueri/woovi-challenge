/**
 * @generated SignedSource<<0d2e8dbdfe325d93d97ed48301f0783a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateUserMutation$variables = {
  email: string;
  helperSeen?: boolean | null;
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
  "name": "helperSeen"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "recovery"
},
v5 = [
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
            "name": "helperSeen",
            "variableName": "helperSeen"
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
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateUserMutation",
    "selections": (v5/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v3/*: any*/),
      (v2/*: any*/),
      (v4/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "UpdateUserMutation",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "2a4e9678309c024b2d28fa2b78baa0e3",
    "id": null,
    "metadata": {},
    "name": "UpdateUserMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateUserMutation(\n  $email: String!\n  $password: String\n  $name: String\n  $recovery: String\n  $helperSeen: Boolean\n) {\n  UpdateUserMutation(input: {email: $email, password: $password, name: $name, recovery: $recovery, helperSeen: $helperSeen}) {\n    success\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "471744506c187c878352a25138c1dfa5";

export default node;
