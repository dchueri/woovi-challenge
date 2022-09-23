import { graphql } from "react-relay";

export const DeleteMovieMutation = graphql`
  mutation DeleteMovieMutation($id: String!) {
    DeleteMovie(input: { id: $id }) {
      error
    }
  }
`;
