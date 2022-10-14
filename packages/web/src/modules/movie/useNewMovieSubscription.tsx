import { useMemo } from 'react';
import { useSubscription } from 'react-relay';
import { MovieNewSubscription, updater } from './MovieNewSubscription';

export const useNewMovieSubscription = (input: any) => {
  const movieNewConfig = useMemo(
    () => ({
      subscription: MovieNewSubscription,
      variables: {
        input: {},
      },
      onCompleted: (...args: any) => {
        console.log('onCompleted: ', args);
      },
      onError: (args: any) => {
        console.log('onError: ', args);
      },
      onNext: ({ MovieNew }: any) => {
        console.log('onNext: ', MovieNew);
      },
      updater,
    }),
    [input],
  );

  useSubscription(movieNewConfig);
};
