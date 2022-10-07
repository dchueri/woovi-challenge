/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type UpdateUserMutationVariables = {
    email: string;
    password?: string | null | undefined;
    name?: string | null | undefined;
    recovery?: string | null | undefined;
    helperSeen?: boolean | null | undefined;
};
export type UpdateUserMutationResponse = {
    readonly UpdateUserMutation: {
        readonly success: string | null;
        readonly error: string | null;
    } | null;
};
export type UpdateUserMutation = {
    readonly response: UpdateUserMutationResponse;
    readonly variables: UpdateUserMutationVariables;
};



/*
mutation UpdateUserMutation(
  $email: String!
  $password: String
  $name: String
  $recovery: String
  $helperSeen: Boolean
) {
  UpdateUserMutation(input: {email: $email, password: $password, name: $name, recovery: $recovery, helperSeen: $helperSeen}) {
    success
    error
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "email"
    } as any, v1 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "helperSeen"
    } as any, v2 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "name"
    } as any, v3 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "password"
    } as any, v4 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "recovery"
    } as any, v5 = [
        {
            "alias": null,
            "args": [
                {
                    "fields": [
                        {
                            "kind": "Variable",
                            "name": "email",
                            "variableName": "email"
                        },
                        {
                            "kind": "Variable",
                            "name": "helperSeen",
                            "variableName": "helperSeen"
                        },
                        {
                            "kind": "Variable",
                            "name": "name",
                            "variableName": "name"
                        },
                        {
                            "kind": "Variable",
                            "name": "password",
                            "variableName": "password"
                        },
                        {
                            "kind": "Variable",
                            "name": "recovery",
                            "variableName": "recovery"
                        }
                    ],
                    "kind": "ObjectValue",
                    "name": "input"
                }
            ],
            "concreteType": "UpdateUserPayload",
            "kind": "LinkedField",
            "name": "UpdateUserMutation",
            "plural": false,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "success",
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
            "argumentDefinitions": [
                (v0 /*: any*/),
                (v1 /*: any*/),
                (v2 /*: any*/),
                (v3 /*: any*/),
                (v4 /*: any*/)
            ],
            "kind": "Fragment",
            "metadata": null,
            "name": "UpdateUserMutation",
            "selections": (v5 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [
                (v0 /*: any*/),
                (v3 /*: any*/),
                (v2 /*: any*/),
                (v4 /*: any*/),
                (v1 /*: any*/)
            ],
            "kind": "Operation",
            "name": "UpdateUserMutation",
            "selections": (v5 /*: any*/)
        },
        "params": {
            "cacheID": "2a4e9678309c024b2d28fa2b78baa0e3",
            "id": null,
            "metadata": {},
            "name": "UpdateUserMutation",
            "operationKind": "mutation",
            "text": "mutation UpdateUserMutation(\n  $email: String!\n  $password: String\n  $name: String\n  $recovery: String\n  $helperSeen: Boolean\n) {\n  UpdateUserMutation(input: {email: $email, password: $password, name: $name, recovery: $recovery, helperSeen: $helperSeen}) {\n    success\n    error\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '240dc8d13e2ca6a050e7c51ddf4df0a1';
export default node;
