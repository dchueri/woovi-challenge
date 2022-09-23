import { graphql } from "react-relay";

export const LoginMutation = graphql`
mutation LoginMutation($email: String!, $password: String!) {
    LoginMutation(input: {email: $email, password: $password}) {
      token
      me {
        id
        name
        email
      }
    }
  }
`;