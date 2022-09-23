/**
 * @generated SignedSource<<d25c6e523789132954ddd0270140896b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateMovieMutation$variables = {
  genre: string;
  title: string;
};
export type CreateMovieMutation$data = {
  readonly CreateMovie: {
    readonly error: string | null;
    readonly movieEdge: {
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
  "name": "genre"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v2 = [
  {
    "alias": null,
    "args": [
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
    "concreteType": "Movie",
    "kind": "LinkedField",
    "name": "CreateMovie",
    "plural": false,
    "selections": [
      {
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
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateMovieMutation",
    "selections": (v2/*: any*/),
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
    "name": "CreateMovieMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "88d8641915ef00efa5cd94b4d44ce6bd",
    "id": null,
    "metadata": {},
    "name": "CreateMovieMutation",
    "operationKind": "mutation",
    "text": "mutation CreateMovieMutation(\n  $title: String!\n  $genre: String!\n) {\n  CreateMovie(input: {title: $title, genre: $genre}) {\n    movieEdge {\n      node {\n        id\n        title\n        genre\n      }\n    }\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "fbca06f4ab55b02c007dcbe3bc222b8e";

export default node;
