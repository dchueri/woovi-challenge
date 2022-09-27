/**
 * @generated SignedSource<<b1911d5bbc0ee87853ddb02b04e54cd8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateMovieMutation$variables = {
  connections: ReadonlyArray<string>;
  genre: string;
  title: string;
};
export type CreateMovieMutation$data = {
  readonly CreateMovie: {
    readonly error: string | null;
    readonly movieEdge: {
      readonly cursor: string | null;
      readonly node: {
        readonly genre: string;
        readonly id: string;
        readonly title: string;
      } | null;
    } | null;
  } | null;
};
export type CreateMovieMutation = {
  response: CreateMovieMutation$data;
  variables: CreateMovieMutation$variables;
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
  "name": "genre"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v3 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "genre",
        "variableName": "genre"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "MovieEdge",
  "kind": "LinkedField",
  "name": "movieEdge",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cursor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Node",
      "kind": "LinkedField",
      "name": "node",
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
          "name": "title",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "genre",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v5 = {
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
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateMovieMutation",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "CreateMovie",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/)
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
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateMovieMutation",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "CreateMovie",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "movieEdge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "89d6ce75885bf132ecd01868c1cff6a9",
    "id": null,
    "metadata": {},
    "name": "CreateMovieMutation",
    "operationKind": "mutation",
    "text": "mutation CreateMovieMutation(\n  $title: String!\n  $genre: String!\n) {\n  CreateMovie(input: {title: $title, genre: $genre}) {\n    movieEdge {\n      cursor\n      node {\n        id\n        title\n        genre\n      }\n    }\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "d76698eae1e6beb5908fcda837659157";

export default node;
