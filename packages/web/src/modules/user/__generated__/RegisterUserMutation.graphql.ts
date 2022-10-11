/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type RegisterUserMutationVariables = {
    name: string;
    email: string;
    password: string;
};
export type RegisterUserMutationResponse = {
    readonly RegisterUserMutation: {
        readonly token: string | null;
        readonly me: {
            readonly id: string;
            readonly name: string | null;
            readonly email: string | null;
        } | null;
        readonly error: string | null;
    } | null;
};
export type RegisterUserMutation = {
    readonly response: RegisterUserMutationResponse;
    readonly variables: RegisterUserMutationVariables;
};



/*
mutation RegisterUserMutation(
  $name: String!
  $email: String!
  $password: String!
) {
  RegisterUserMutation(input: {name: $name, email: $email, password: $password}) {
    token
    me {
      id
      name
      email
    }
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
        "name": "name"
    } as any, v2 = {
        "defaultValue": null,
        "kind": "LocalArgument",
        "name": "password"
    } as any, v3 = [
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
                            "name": "name",
                            "variableName": "name"
                        },
                        {
                            "kind": "Variable",
                            "name": "password",
                            "variableName": "password"
                        }
                    ],
                    "kind": "ObjectValue",
                    "name": "input"
                }
            ],
            "concreteType": "RegisterUserMutationPayload",
            "kind": "LinkedField",
            "name": "RegisterUserMutation",
            "plural": false,
            "selections": [
                {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "token",
                    "storageKey": null
                },
                {
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
                (v2 /*: any*/)
            ],
            "kind": "Fragment",
            "metadata": null,
            "name": "RegisterUserMutation",
            "selections": (v3 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": [
                (v1 /*: any*/),
                (v0 /*: any*/),
                (v2 /*: any*/)
            ],
            "kind": "Operation",
            "name": "RegisterUserMutation",
            "selections": (v3 /*: any*/)
        },
        "params": {
            "cacheID": "b5157d36531ef9431173d7be703bc07b",
            "id": null,
            "metadata": {},
            "name": "RegisterUserMutation",
            "operationKind": "mutation",
            "text": "mutation RegisterUserMutation(\n  $name: String!\n  $email: String!\n  $password: String!\n) {\n  RegisterUserMutation(input: {name: $name, email: $email, password: $password}) {\n    token\n    me {\n      id\n      name\n      email\n    }\n    error\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '1cd8cb020f6a29934c9c9fc5ded92c12';
export default node;
