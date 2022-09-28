/**
 * @generated SignedSource<<40b72da2d40980fcd17b155f52126eb4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AllMoviesQuery$variables = {
  first?: number | null;
};
export type AllMoviesQuery$data = {
  readonly movies: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly cursor: string | null;
      readonly node: {
        readonly genre: string;
        readonly id: string;
        readonly image: string | null;
        readonly title: string;
      } | null;
    } | null> | null;
    readonly pageInfo: {
      readonly endCursor: string | null;
      readonly hasNextPage: string | null;
      readonly hasPreviousPage: string | null;
      readonly startCursor: string | null;
    } | null;
  } | null;
};
export type AllMoviesQuery = {
  response: AllMoviesQuery$data;
  variables: AllMoviesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "first"
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "IMovieEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
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
            "name": "__typename",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cursor",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "PageInfo",
    "kind": "LinkedField",
    "name": "pageInfo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hasNextPage",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hasPreviousPage",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "startCursor",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "endCursor",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "kind": "ClientExtension",
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__id",
        "storageKey": null
      }
    ]
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AllMoviesQuery",
    "selections": [
      {
        "alias": "movies",
        "args": null,
        "concreteType": "Movies",
        "kind": "LinkedField",
        "name": "__All_movies_connection",
        "plural": false,
        "selections": (v1/*: any*/),
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AllMoviesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Movies",
        "kind": "LinkedField",
        "name": "movies",
        "plural": false,
        "selections": (v1/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "All_movies",
        "kind": "LinkedHandle",
        "name": "movies"
      }
    ]
  },
  "params": {
    "cacheID": "d36dbca2e111c89d5b90a6652c6d5aa1",
    "id": null,
    "metadata": {
      "connection": [
        {
          "count": "first",
          "cursor": null,
          "direction": "forward",
          "path": [
            "movies"
          ]
        }
      ]
    },
    "name": "AllMoviesQuery",
    "operationKind": "query",
    "text": "query AllMoviesQuery(\n  $first: Int\n) {\n  movies(first: $first) {\n    edges {\n      node {\n        id\n        title\n        genre\n        image\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8eb62e97169fcd9497aa2123122ffa3c";

export default node;
