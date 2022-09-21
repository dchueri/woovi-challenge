import { graphql } from "react-relay";

export const CreateMovieMutation = graphql`
  mutation CreateMovieMutation($title: String!, $genre: String!) {
    CreateMovie(input: { title: $title, genre: $genre }) {
      movieEdge {
        node {
          id
          title
          genre
        }
      }
      error
    }
  }
`;
