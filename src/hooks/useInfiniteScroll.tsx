import { useState, useCallback } from 'react';
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from 'src/redux/config/store';

const useInfiniteScroll = (
  action: (page: number) => Promise<void>,
  selector: keyof Omit<RootState, 'auth'>
) => {
  const [node, setNode] = useState(null);
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
              dispatch(action(state.meta.page + 1));
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
