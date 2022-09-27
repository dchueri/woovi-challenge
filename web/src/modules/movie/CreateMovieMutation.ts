import { graphql } from "react-relay";

export const CreateMovieMutation = graphql`
  mutation CreateMovieMutation($title: String!, $genre: String!, $connections: [ID!]!) {
    CreateMovie(input: { title: $title, genre: $genre }) {
      movieEdge @appendEdge(connections: $connections){
        cursor
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
