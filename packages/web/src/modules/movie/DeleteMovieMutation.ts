import { graphql } from 'react-relay';
import { ROOT_ID, SelectorStoreUpdater } from 'relay-runtime';
import { connectionDeleteEdgeUpdater } from '../../relay/mutationUtils';

export const DeleteMovieMutation = graphql`
  mutation DeleteMovieMutation($id: String!, $nodeId: String!) {
    DeleteMovie(input: { id: $id, nodeId: $nodeId }) {
      deletedId
      error
    }
  }
`;

export const updater: SelectorStoreUpdater = store => {
  const deletedEdge = store.getRootField('DeleteMovie')!.getValue('deletedId');
  connectionDeleteEdgeUpdater({
    store,
    parentId: ROOT_ID,
    connectionName: 'Feed_movies',
    nodeId: deletedEdge!.toString(),
  });
};
