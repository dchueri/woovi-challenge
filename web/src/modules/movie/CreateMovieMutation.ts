import { graphql } from "react-relay";

export const CreateMovieMutation = graphql`
  mutation CreateMovieMutation($title: String!, $genre: String!, $image: String!, $connections: [ID!]!) {
    CreateMovie(input: { title: $title, genre: $genre, image: $image }) {
      movieEdge @appendEdge(connections: $connections){
        cursor
        node {
          id
          title
          genre
          image
        }
      }
      error
    }
  }
`;
