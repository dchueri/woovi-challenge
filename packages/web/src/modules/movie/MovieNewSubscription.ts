import { graphql } from 'react-relay';
import { ConnectionHandler, RecordSourceSelectorProxy, ROOT_ID } from 'relay-runtime';
import { connectionUpdater } from '../../relay/mutationUtils';

export const MovieNewSubscription = graphql`
subscription MovieNewSubscription($input: MovieNewInput!) {
    MovieNew(input: $input) {
      movie {
        id
        title
        genre
        image
        description
        average
        author {
          name
          id
        }
      }
    }
  }
`;

export const updater = (store: RecordSourceSelectorProxy) => {
  const movieNode = store.getRootField('MovieNew')!.getLinkedRecord('movie');

  const movieId = movieNode!.getValue('id');
  const movieStore = store.get(movieId!.toString());
  if (!movieStore) {
    const movieConnection = ConnectionHandler.getConnection(store.getRoot(), 'Feed_movies');

    const movieEdge = ConnectionHandler.createEdge(store, movieConnection!, movieNode!, 'MovieEdge');

    connectionUpdater({
      store,
      parentId: ROOT_ID,
      connectionName: 'Feed_movies',
      edge: movieEdge,
      before: true,
    });
  }
};
