/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type LoginMutationVariables = {
    email: string;
    password: string;
};
export type LoginMutationResponse = {
    readonly LoginMutation: {
        readonly token: string | null;
        readonly me: {
            readonly id: string;
            readonly name: string | null;
            readonly email: string | null;
            readonly helperSeen: boolean | null;
        } | null;
        readonly error: string | null;
    } | null;
};
export type LoginMutation = {
    readonly response: LoginMutationResponse;
    readonly variables: LoginMutationVariables;
};



/*
mutation LoginMutation(
  $email: String!
  $password: String!
) {
  LoginMutation(input: {email: $email, password: $password}) {
    token
    me {
      id
      name
      email
      helperSeen
    }
    error
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "email"
        } as any,
        {
            "defaultValue": null,
            "kind": "LocalArgument",
            "name": "password"
        } as any
    ], v1 = [
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
                            "name": "password",
                            "variableName": "password"
                        }
                    ],
                    "kind": "ObjectValue",
                    "name": "input"
                }
            ],
            "concreteType": "LoginMutationPayload",
            "kind": "LinkedField",
            "name": "LoginMutation",
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
                        },
                        {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "helperSeen",
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
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Fragment",
            "metadata": null,
            "name": "LoginMutation",
            "selections": (v1 /*: any*/),
            "type": "Mutation",
            "abstractKey": null
        },
        "kind": "Request",
        "operation": {
            "argumentDefinitions": (v0 /*: any*/),
            "kind": "Operation",
            "name": "LoginMutation",
            "selections": (v1 /*: any*/)
        },
        "params": {
            "cacheID": "49ac32debc756e45d324be26d11d4d2f",
            "id": null,
            "metadata": {},
            "name": "LoginMutation",
            "operationKind": "mutation",
            "text": "mutation LoginMutation(\n  $email: String!\n  $password: String!\n) {\n  LoginMutation(input: {email: $email, password: $password}) {\n    token\n    me {\n      id\n      name\n      email\n      helperSeen\n    }\n    error\n  }\n}\n"
        }
    } as any;
})();
(node as any).hash = '0789573f18bd596ff22d15f01e7dde58';
export default node;
