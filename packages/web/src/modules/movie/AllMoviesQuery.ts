import { graphql } from 'relay-runtime';

export const AllMovies = graphql`
  query AllMoviesQuery($first: Int) {
    movies(first: $first) @connection(key: "Feed_movies") {
      __id
      edges {
        node {
          id
          title
          genre
          image
          description
          average
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
    me {
      name
      id
    }
  }
`;
