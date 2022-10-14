/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type DeleteMovieMutationVariables = {
    id: string;
    nodeId: string;
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
  $nodeId: String!
) {
  DeleteMovie(input: {id: $id, nodeId: $nodeId}) {
    deletedId
    error
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "id"
        } as any,
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "nodeId"
        } as any
    ], v1 = [
        {
            "alias": null,
            "args": [
                {
                    "fields": [
                        {
                            "kind": "Variable",
                            "name": "id",
                            "variableName": "id"
                        },
                        {
                            "kind": "Variable",
                            "name": "nodeId",
                            "variableName": "nodeId"
                        }
                    ],
                    "kind": "ObjectValue",
                    "name": "input"
                }
            ],
            "concreteType": "DeleteMoviePayload",
            "kind": "LinkedField",
            "name": "DeleteMovie",
            "plural": false,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "deletedId",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "error",
                    "storageKey": null
                }
            ],
            "storageKey": null
        } as any
    ];
    return {
        "fragment": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "DeleteMovieMutation",
            "selections": (v1 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "DeleteMovieMutation",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "6b65ce8dbad4de7107686574bc366096",
            "id": null,
            "metadata": {},
            "name": "DeleteMovieMutation",
            "operationKind": "mutation",
            "text": "mutation DeleteMovieMutation(\n  $id: String!\n  $nodeId: String!\n) {\n  DeleteMovie(input: {id: $id, nodeId: $nodeId}) {\n    deletedId\n    error\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '92839060b4cae91e0759ce67e7e66653';
export default node;
