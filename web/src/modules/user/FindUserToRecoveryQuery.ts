import { graphql } from "relay-runtime";

export const FindUserToRecovery = graphql`
  query FindUserToRecoveryQuery($recoveryToken: String!) {
    user(recoveryToken: $recoveryToken) {
      id
      name
      email
    }
  }
`;
