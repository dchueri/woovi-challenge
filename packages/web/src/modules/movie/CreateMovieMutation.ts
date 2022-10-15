import { graphql } from "react-relay";
import { ROOT_ID, SelectorStoreUpdater } from "relay-runtime";
import { connectionUpdater } from "../../relay/mutationUtils";

export const CreateMovieMutation = graphql`
  mutation CreateMovieMutation($title: String!, $genre: String!, $image: String!, $description: String!, $average: Float!) {
    MovieCreate(input: { title: $title, genre: $genre, image: $image, description: $description, average: $average }) {
      movieEdge {
        cursor
        node {
          _id
          title
          genre
          image
          description
          average
        }
      }
      error
      success
    }
  }
`;

export const updater: SelectorStoreUpdater = store => {
  const newEdge = store.getRootField('MovieCreate')!.getLinkedRecord('movieEdge');
  connectionUpdater({
    store,
    parentId: ROOT_ID,
    connectionName: 'Feed_movies',
    edge: newEdge!,
    before: true,
  });
  store.invalidateStore();
};