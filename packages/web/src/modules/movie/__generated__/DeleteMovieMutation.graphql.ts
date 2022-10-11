/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type DeleteMovieMutationVariables = {
    id: string;
    connections: Array<string>;
};
export type DeleteMovieMutationResponse = {
    readonly DeleteMovie: {
        readonly deletedId: string | null;
        readonly error: string | null;
    } | null;
};
export type DeleteMovieMutation = {
    readonly response: DeleteMovieMutationResponse;
    readonly variables: DeleteMovieMutationVariables;
};



/*
mutation DeleteMovieMutation(
  $id: String!
) {
  DeleteMovie(input: {id: $id}) {
    deletedId
    error
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "connections"
    } as any, v1 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "id"
    } as any, v2 = [
        {
            "fields": [
                {
                    "kind": "Variable",
                    "name": "id",
                    "variableName": "id"
                }
            ],
            "kind": "ObjectValue",
            "name": "input"
        } as any
    ], v3 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedId",
        "storageKey": null
    } as any, v4 = {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "error",
        "storageKey": null
    } as any;
    return {
        "fragment": {
            "argumentDefinitions": [
                (v0 /*: any*/),
                (v1 /*: any*/)
            ],
            "kind": "Fragment",
            "metadata": null,
            "name": "DeleteMovieMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v2 /*: any*/),
                    "concreteType": "DeleteMoviePayload",
                    "kind": "LinkedField",
                    "name": "DeleteMovie",
                    "plural": false,
                    "selections": [
                        (v3 /*: any*/),
                        (v4 /*: any*/)
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
                (v1 /*: any*/),
                (v0 /*: any*/)
            ],
            "kind": "Operation",
            "name": "DeleteMovieMutation",
            "selections": [
                {
                    "alias": null,
                    "args": (v2 /*: any*/),
                    "concreteType": "DeleteMoviePayload",
                    "kind": "LinkedField",
                    "name": "DeleteMovie",
                    "plural": false,
                    "selections": [
                        (v3 /*: any*/),
                        {
                            "alias": null,
                            "args": null,
                            "filters": null,
                            "handle": "deleteEdge",
                            "key": "",
                            "kind": "ScalarHandle",
                            "name": "deletedId",
                            "handleArgs": [
                                {
                                    "kind": "Variable",
                                    "name": "connections",
                                    "variableName": "connections"
                                }
                            ]
                        },
                        (v4 /*: any*/)
                    ],
                    "storageKey": null
                }
            ]
        },
        "params": {
            "cacheID": "9d054a5d69cd150c42590a278d0484e9",
            "id": null,
            "metadata": {},
            "name": "DeleteMovieMutation",
            "operationKind": "mutation",
            "text": "mutation DeleteMovieMutation(\n  $id: String!\n) {\n  DeleteMovie(input: {id: $id}) {\n    deletedId\n    error\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '997eb9d21fd682d1b7ff41bceab699b4';
export default node;
