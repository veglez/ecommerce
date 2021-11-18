import { query } from 'index';
import { useState, useCallback } from 'react';
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from 'src/redux/config/store';

const useInfiniteScroll = (
  action: (query: query<any>) => Promise<void>,
  selector: keyof Omit<RootState, 'auth'>
) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((s) => s[selector]);

  const refCallback = useCallback(
    (ref) => {
      if (ref) {
        const options: IntersectionObserverInit = {
          root: null,
          rootMargin: '0px',
          threshold: 0,
        };

        const getMoreData: IntersectionObserverCallback = (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            if (
              (state && state.meta && state.meta.hasNext) ||
              state?.meta.page === 0
            ) {
              console.log('PAGE ', state.meta.page + 1);
              dispatch(action({ page: state.meta.page + 1 }));
            }
          }
        };

        const observer = new IntersectionObserver(getMoreData, options);
        console.log('RENDER REF', ref);
        observer.observe(ref);
      }
    },
    [state?.meta.page]
  );

  return { refCallback };
};

export default useInfiniteScroll;
