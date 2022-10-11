import { graphql } from 'react-relay';

export const CommentCreate = graphql`
  mutation CommentCreateMutation($input: CommentCreateMutationInput!) {
    CommentCreateMutation(input: $input) {
      error
      movie {
        commentsCount
      }
      commentEdge {
        node {
          id
          text
          user {
            id
            name
          }
        }
      }
    }
  }
`;
