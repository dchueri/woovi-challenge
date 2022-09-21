/**
 * @generated SignedSource<<77df51f0d8f8fb527f5c4b1e37bcd066>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AllMoviesQuery$variables = {};
export type AllMoviesQuery$data = {
  readonly movies: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string | null;
      readonly node: {
        readonly genre: string;
        readonly id: string;
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
    "alias": null,
    "args": null,
    "concreteType": "Movies",
    "kind": "LinkedField",
    "name": "movies",
    "plural": false,
    "selections": [
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AllMoviesQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AllMoviesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "f7c2440de9acbfda5fb473e01d1b134e",
    "id": null,
    "metadata": {},
    "name": "AllMoviesQuery",
    "operationKind": "query",
    "text": "query AllMoviesQuery {\n  movies {\n    edges {\n      node {\n        id\n        title\n        genre\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "49f122e7fdac78cf2063c2ee1d6d2352";

export default node;
