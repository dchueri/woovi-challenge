/**
 * @generated SignedSource<<67415193ecf9e9bf63c87f95ac0f4019>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateMovieMutation$variables = {
  connections: ReadonlyArray<string>;
  description: string;
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
        readonly description: string | null;
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
  "name": "description"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "genre"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "image"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v5 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description"
      },
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
v6 = {
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
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "description",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v7 = {
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
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateMovieMutation",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "CreateMovie",
        "plural": false,
        "selections": [
          (v6/*: any*/),
          (v7/*: any*/)
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
      (v4/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateMovieMutation",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "CreateMovie",
        "plural": false,
        "selections": [
          (v6/*: any*/),
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
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "60f95f87e01bcd4733c4ef757655794d",
    "id": null,
    "metadata": {},
    "name": "CreateMovieMutation",
    "operationKind": "mutation",
    "text": "mutation CreateMovieMutation(\n  $title: String!\n  $genre: String!\n  $image: String!\n  $description: String!\n) {\n  CreateMovie(input: {title: $title, genre: $genre, image: $image, description: $description}) {\n    movieEdge {\n      cursor\n      node {\n        id\n        title\n        genre\n        image\n        description\n      }\n    }\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "1ce1e531e718e3841b8a6f98c84d471b";

export default node;
