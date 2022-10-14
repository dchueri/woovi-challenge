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
                readonly _id: string;
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
    readonly me: {
        readonly name: string | null;
        readonly id: string;
    } | null;
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
        _id
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
  me {
    name
    id
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
    ], v1 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
    } as any, v2 = [
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
                        (v1 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "_id",
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
    ], v3 = {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
            {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
            },
            (v1 /*: any*/)
        ],
        "storageKey": null
    } as any, v4 = [
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
                    "name": "__Feed_movies_connection",
                    "plural": false,
                    "selections": (v2 /*: any*/),
                    "storageKey": null
                },
                (v3 /*: any*/)
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
                    "args": (v4 /*: any*/),
                    "concreteType": "MovieConnection",
                    "kind": "LinkedField",
                    "name": "movies",
                    "plural": false,
                    "selections": (v2 /*: any*/),
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": (v4 /*: any*/),
                    "filters": null,
                    "handle": "connection",
                    "key": "Feed_movies",
                    "kind": "LinkedHandle",
                    "name": "movies"
                },
                (v3 /*: any*/)
            ]
        },
        "params": {
            "cacheID": "7facb1db2b61ea0c69171132d6243588",
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
            "text": "query AllMoviesQuery(\n  $first: Int\n) {\n  movies(first: $first) {\n    edges {\n      node {\n        id\n        _id\n        title\n        genre\n        image\n        description\n        average\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n  }\n  me {\n    name\n    id\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = 'ccb3dcff09d2596045576694f3dac7a8';
export default node;
