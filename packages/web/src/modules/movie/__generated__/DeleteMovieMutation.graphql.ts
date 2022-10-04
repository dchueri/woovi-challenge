/**
 * @generated SignedSource<<0837f698fc399688137827140227d572>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteMovieMutation$variables = {
  connections: ReadonlyArray<string>;
  id: string;
};
export type DeleteMovieMutation$data = {
  readonly DeleteMovie: {
    readonly deletedId: string | null;
    readonly error: string | null;
  } | null;
};
export type DeleteMovieMutation = {
  response: DeleteMovieMutation$data;
  variables: DeleteMovieMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = [
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "deletedId",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "error",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteMovieMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteMovie",
        "kind": "LinkedField",
        "name": "DeleteMovie",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "DeleteMovieMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteMovie",
        "kind": "LinkedField",
        "name": "DeleteMovie",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "deletedId",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9d054a5d69cd150c42590a278d0484e9",
    "id": null,
    "metadata": {},
    "name": "DeleteMovieMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteMovieMutation(\n  $id: String!\n) {\n  DeleteMovie(input: {id: $id}) {\n    deletedId\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "997eb9d21fd682d1b7ff41bceab699b4";

export default node;
