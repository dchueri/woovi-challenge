/**
 * @generated SignedSource<<19b953aaa324172c6519f57c7f6c0cf4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateMovieMutation$variables = {
  average: number;
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
        readonly average: number;
        readonly description: string;
        readonly genre: string;
        readonly id: string;
        readonly image: string;
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
  "name": "average"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "genre"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "image"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v6 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "average",
        "variableName": "average"
      },
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
v7 = {
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
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "average",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v8 = {
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
      (v4/*: any*/),
      (v5/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateMovieMutation",
    "selections": [
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "CreateMovie",
        "plural": false,
        "selections": [
          (v7/*: any*/),
          (v8/*: any*/)
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
      (v5/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateMovieMutation",
    "selections": [
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "CreateMovie",
        "plural": false,
        "selections": [
          (v7/*: any*/),
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
          (v8/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8208b7708900ac9b92dde8060dd7cb9e",
    "id": null,
    "metadata": {},
    "name": "CreateMovieMutation",
    "operationKind": "mutation",
    "text": "mutation CreateMovieMutation(\n  $title: String!\n  $genre: String!\n  $image: String!\n  $description: String!\n  $average: Float!\n) {\n  CreateMovie(input: {title: $title, genre: $genre, image: $image, description: $description, average: $average}) {\n    movieEdge {\n      cursor\n      node {\n        id\n        title\n        genre\n        image\n        description\n        average\n      }\n    }\n    error\n  }\n}\n"
  }
};
})();

(node as any).hash = "ba6bd6380fabb186b255ab8274c30679";

export default node;
