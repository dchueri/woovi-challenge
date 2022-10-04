import { graphql } from "relay-runtime";

export const FindUserToRecovery = graphql`
  query FindUserToRecoveryQuery($recovery: String!) {
    user(recovery: $recovery) {
      id
      name
      email
    }
  }
`;
