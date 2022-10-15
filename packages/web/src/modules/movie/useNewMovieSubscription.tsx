import { useMemo } from 'react';
import { useSubscription } from 'react-relay';
import { useSetRecoilState } from 'recoil';
import { alertDispatch, Severity } from '../../utils/alerts';
import { alertState } from '../../utils/atom';
import { MovieNewSubscription, updater } from './MovieNewSubscription';

export const useNewMovieSubscription = (me: string) => {
  const setAlert = useSetRecoilState(alertState)
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
        const alert = {
          display: true,
          severity: Severity.success,
          content: `Movie ${MovieNew.movie.title} added now`,
        };
        if (MovieNew.movie.author.id !== me) {
          alertDispatch(alert, setAlert);
        }
        /*         if (MovieNew.movie.author.id !== me) {
          setOptions(prev => ({
            fetchKey: (prev?.fetchKey ?? 0) + 1,
            fetchPolicy: 'network-only',
          }));
        } */
      },
      updater,
    }),
    [],
  );

  useSubscription(movieNewConfig);
};
