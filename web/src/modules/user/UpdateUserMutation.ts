import { graphql } from "react-relay";

export const UpdateUserMutation = graphql`
  mutation UpdateUserMutation($email: String!, $password: String, $name: String, $recoveryToken: String) {
    UpdateUserMutation(input: { email: $email, password: $password, name: $name, recoveryToken: $recoveryToken }) {
      success
      error
    }
  }
`;
