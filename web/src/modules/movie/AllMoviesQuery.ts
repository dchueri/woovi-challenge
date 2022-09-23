import { graphql } from 'relay-runtime';

export const AllMovies = graphql`
  query AllMoviesQuery {
    movies {
      edges {
        node {
          id
          title
          genre
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;
