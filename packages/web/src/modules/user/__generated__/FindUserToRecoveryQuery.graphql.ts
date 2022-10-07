/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type FindUserToRecoveryQueryVariables = {
    recovery: string;
};
export type FindUserToRecoveryQueryResponse = {
    readonly user: {
        readonly id: string;
        readonly name: string;
        readonly email: string;
    } | null;
};
export type FindUserToRecoveryQuery = {
    readonly response: FindUserToRecoveryQueryResponse;
    readonly variables: FindUserToRecoveryQueryVariables;
};



/*
query FindUserToRecoveryQuery(
  $recovery: String!
) {
  user(recovery: $recovery) {
    id
    name
    email
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "recovery"
        } as any
    ], v1 = [
        {
            "alias": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "recovery",
                    "variableName": "recovery"
                }
            ],
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
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
                    "name": "name",
                    "storageKey": null
                },
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "email",
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
            "name": "FindUserToRecoveryQuery",
            "selections": (v1 /*: any*/),
            "type": "Query",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "FindUserToRecoveryQuery",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "8ef7dad8eb3a4185b4e9aa9849ce5dcb",
            "id": null,
            "metadata": {},
            "name": "FindUserToRecoveryQuery",
            "operationKind": "query",
            "text": "query FindUserToRecoveryQuery(\n  $recovery: String!\n) {\n  user(recovery: $recovery) {\n    id\n    name\n    email\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '7e4b67b040b67a9b3124a655010eb161';
export default node;
