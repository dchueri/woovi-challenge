import { graphql } from "react-relay";

export const UpdateUserMutation = graphql`
  mutation UpdateUserMutation($email: String!, $password: String, $name: String, $recovery: String) {
    UpdateUserMutation(input: { email: $email, password: $password, name: $name, recovery: $recovery }) {
      success
      error
    }
  }
`;
