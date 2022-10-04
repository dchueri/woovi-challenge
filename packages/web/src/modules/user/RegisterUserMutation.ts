import { graphql } from "react-relay";

export const RegisterUserMutation = graphql`
mutation RegisterUserMutation($name: String!, $email: String!, $password: String!) {
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
`;