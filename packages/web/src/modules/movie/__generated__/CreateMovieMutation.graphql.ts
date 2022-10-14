/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type CreateMovieMutationVariables = {
    title: string;
    genre: string;
    image: string;
    description: string;
    average: number;
};
export type CreateMovieMutationResponse = {
    readonly MovieCreate: {
        readonly movieEdge: {
            readonly cursor: string;
            readonly node: {
                readonly _id: string;
                readonly title: string | null;
                readonly genre: string | null;
                readonly image: string | null;
                readonly description: string | null;
                readonly average: number | null;
            } | null;
        } | null;
        readonly error: string | null;
        readonly success: string | null;
    } | null;
};
export type CreateMovieMutation = {
    readonly response: CreateMovieMutationResponse;
    readonly variables: CreateMovieMutationVariables;
};



/*
mutation CreateMovieMutation(
  $title: String!
  $genre: String!
  $image: String!
  $description: String!
  $average: Float!
) {
  MovieCreate(input: {title: $title, genre: $genre, image: $image, description: $description, average: $average}) {
    movieEdge {
      cursor
      node {
        _id
        title
        genre
        image
        description
        average
        id
      }
    }
    error
    success
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "average"
    } as any, v1 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "description"
    } as any, v2 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "genre"
    } as any, v3 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "image"
    } as any, v4 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "title"
    } as any, v5 = [
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
        } as any
    ], v6 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cursor",
        "storageKey": null
    } as any, v7 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
    } as any, v8 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
    } as any, v9 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "genre",
        "storageKey": null
    } as any, v10 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "image",
        "storageKey": null
    } as any, v11 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
    } as any, v12 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "average",
        "storageKey": null
    } as any, v13 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "error",
        "storageKey": null
    } as any, v14 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
        "storageKey": null
    } as any;
    return {
        "fragment": {
            "argumentDefinitions": [
                (v0 /*: any*/),
                (v1 /*: any*/),
                (v2 /*: any*/),
                (v3 /*: any*/),
                (v4 /*: any*/)
            ],
            "kind": "Fragment",
            "metadata": null,
            "name": "CreateMovieMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v5 /*: any*/),
                    "concreteType": "MovieCreatePayload",
                    "kind": "LinkedField",
                    "name": "MovieCreate",
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
                                (v6 /*: any*/),
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Movie",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                        (v7 /*: any*/),
                                        (v8 /*: any*/),
                                        (v9 /*: any*/),
                                        (v10 /*: any*/),
                                        (v11 /*: any*/),
                                        (v12 /*: any*/)
                                    ],
                                    "storageKey": null
                                }
                            ],
                            "storageKey": null
                        },
                        (v13 /*: any*/),
                        (v14 /*: any*/)
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
                (v4 /*: any*/),
                (v2 /*: any*/),
                (v3 /*: any*/),
                (v1 /*: any*/),
                (v0 /*: any*/)
            ],
            "kind": "Operation",
            "name": "CreateMovieMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v5 /*: any*/),
                    "concreteType": "MovieCreatePayload",
                    "kind": "LinkedField",
                    "name": "MovieCreate",
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
                                (v6 /*: any*/),
                                {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Movie",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                        (v7 /*: any*/),
                                        (v8 /*: any*/),
                                        (v9 /*: any*/),
                                        (v10 /*: any*/),
                                        (v11 /*: any*/),
                                        (v12 /*: any*/),
                                        {
                                            "alias": null,
                                            "args": null,
                                            "kind": "ScalarField",
                                            "name": "id",
                                            "storageKey": null
                                        }
                                    ],
                                    "storageKey": null
                                }
                            ],
                            "storageKey": null
                        },
                        (v13 /*: any*/),
                        (v14 /*: any*/)
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "f4f9cfe83c3e8e625b0035ca5beb7d5e",
            "id": null,
            "metadata": {},
            "name": "CreateMovieMutation",
            "operationKind": "mutation",
            "text": "mutation CreateMovieMutation(\n  $title: String!\n  $genre: String!\n  $image: String!\n  $description: String!\n  $average: Float!\n) {\n  MovieCreate(input: {title: $title, genre: $genre, image: $image, description: $description, average: $average}) {\n    movieEdge {\n      cursor\n      node {\n        _id\n        title\n        genre\n        image\n        description\n        average\n        id\n      }\n    }\n    error\n    success\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '68238d9e4ccdd874599a0ccf92d742c8';
export default node;
