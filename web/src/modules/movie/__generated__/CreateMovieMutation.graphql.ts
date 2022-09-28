/**
 * @generated SignedSource<<8b2225451db2c10a1af0520ff6f33ce9>>
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
  image: string;
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
        readonly image: string | null;
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
  "name": "image"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v4 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "genre",
        "variableName": "genre"
      },
      {
        "kind": "Variable",
        "name": "image",
        "variableName": "image"
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
v5 = {
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
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "image",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v6 = {
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
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateMovieMutation",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "CreateMovie",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          (v6/*: any*/)
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
      (v3/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateMovieMutation",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "CreateMovie",
        "plural": false,
        "selections": [
          (v5/*: any*/),
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
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bf53ceec177622028e1ba64329d6d83f",
    "id": null,
    "metadata": {},
    "name": "CreateMovieMutation",
    "operationKind": "mutation",
    "text": "mutation CreateMovieMutation(\n  $title: String!\n  $genre: String!\n  $image: String!\n) {\n  CreateMovie(input: {title: $title, genre: $genre, image: $image}) {\n    movieEdge {\n      cursor\n      node {\n        id\n        title\n        genre\n        image\n      }\n    }\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "e3049e31feec53fc77a5439f2151035e";

export default node;
