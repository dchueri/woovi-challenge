import { graphql } from "react-relay";

export const DeleteMovieMutation = graphql`
  mutation DeleteMovieMutation($id: String!, $connections: [ID!]!) {
    DeleteMovie (input: { id: $id }) {
      deletedId @deleteEdge(connections: $connections)
      error
    }
  }
`;
