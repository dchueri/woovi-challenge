import { useMemo } from 'react';
import { useSubscription } from 'react-relay';
import { MovieNewSubscription, updater } from './MovieNewSubscription';

export const useNewPostSubscription = () => {
  const movieNewConfig = useMemo(
    () => ({
      subscription: MovieNewSubscription,
      variables: {
        input: {},
      },
      onCompleted: (...args: any) => {
        console.log('onCompleted: ', args);
      },
      onError: (...args: any) => {
        console.log('onError: ', args);
      },
      onNext: ({ MovieNew }: any) => {
        const movie = MovieNew?.movie;
        console.log('movie');
        console.log(movie);
      },
      updater,
    }),
    [],
  );

  useSubscription(movieNewConfig);
};
