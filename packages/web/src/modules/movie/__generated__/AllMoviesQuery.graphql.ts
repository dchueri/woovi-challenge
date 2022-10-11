/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type AllMoviesQueryVariables = {
    first?: number | null | undefined;
};
export type AllMoviesQueryResponse = {
    readonly movies: {
        readonly __id: string;
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly title: string | null;
                readonly genre: string | null;
                readonly image: string | null;
                readonly description: string | null;
                readonly average: number | null;
            } | null;
            readonly cursor: string;
        } | null>;
        readonly pageInfo: {
            readonly hasNextPage: boolean;
            readonly hasPreviousPage: boolean;
            readonly startCursor: string | null;
            readonly endCursor: string | null;
        };
    };
};
export type AllMoviesQuery = {
    readonly response: AllMoviesQueryResponse;
    readonly variables: AllMoviesQueryVariables;
};



/*
query AllMoviesQuery(
  $first: Int
) {
  movies(first: $first) {
    edges {
      node {
        id
        title
        genre
        image
        description
        average
        __typename
      }
      cursor
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "first"
        } as any
    ], v1 = [
        {
            "alias": null,
            "args": null,
            "concreteType": "MovieEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "concreteType": "Movie",
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
        } as any,
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
        } as any,
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
        } as any
    ], v2 = [
        {
            "kind": "Variable",
            "name": "first",
            "variableName": "first"
        } as any
    ];
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "AllMoviesQuery",
            "selections": [
                {
                    "alias": "movies",
                    "args": null,
                    "concreteType": "MovieConnection",
                    "kind": "LinkedField",
                    "name": "__All_movies_connection",
                    "plural": false,
                    "selections": (v1 /*: any*/),
                    "storageKey": null
                }
            ],
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "AllMoviesQuery",
            "selections": [
                {
                    "alias": null,
                    "args": (v2 /*: any*/),
                    "concreteType": "MovieConnection",
                    "kind": "LinkedField",
                    "name": "movies",
                    "plural": false,
                    "selections": (v1 /*: any*/),
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": (v2 /*: any*/),
                    "filters": null,
                    "handle": "connection",
                    "key": "All_movies",
                    "kind": "LinkedHandle",
                    "name": "movies"
                }
            ]
        },
        "params": {
            "cacheID": "1a1bc41e631a590de3fe17cb61b4931c",
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
            "text": "query AllMoviesQuery(\n  $first: Int\n) {\n  movies(first: $first) {\n    edges {\n      node {\n        id\n        title\n        genre\n        image\n        description\n        average\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '639e7fe9d9c8fb4bab54691d912e60a1';
export default node;
