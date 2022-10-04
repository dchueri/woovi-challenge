import { graphql } from "react-relay";

export const CreateMovieMutation = graphql`
  mutation CreateMovieMutation($title: String!, $genre: String!, $image: String!, $description: String!, $average: Float!, $connections: [ID!]!) {
    CreateMovie(input: { title: $title, genre: $genre, image: $image, description: $description, average: $average }) {
      movieEdge @appendEdge(connections: $connections){
        cursor
        node {
          id
          title
          genre
          image
          description
          average
        }
      }
      error
    }
  }
`;
