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
                readonly id: string;
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
        id
        title
        genre
        image
        description
        average
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
            "alias": null,
            "args": [
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
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "success",
                    "storageKey": null
                }
            ],
            "storageKey": null
        } as any
    ];
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
            "selections": (v5 /*: any*/),
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
            "selections": (v5 /*: any*/)
        },
        "params": {
            "cacheID": "f38d3b9c24a9b1d5fbbbff54c6af92f2",
            "id": null,
            "metadata": {},
            "name": "CreateMovieMutation",
            "operationKind": "mutation",
            "text": "mutation CreateMovieMutation(\n  $title: String!\n  $genre: String!\n  $image: String!\n  $description: String!\n  $average: Float!\n) {\n  MovieCreate(input: {title: $title, genre: $genre, image: $image, description: $description, average: $average}) {\n    movieEdge {\n      cursor\n      node {\n        id\n        title\n        genre\n        image\n        description\n        average\n      }\n    }\n    error\n    success\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '6d9cad00361dcd85e4406bf87e6be3c9';
export default node;
