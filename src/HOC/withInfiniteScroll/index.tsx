import React, { useState, useEffect, useCallback } from 'react';
import { Dispatch } from 'redux';
import { useAppDispatch, useAppSelector } from 'src/redux/config/store';
import { AppActions } from 'src/redux/types';

const withInfiniteScroll = (
  Component: React.FC<any>,

  action: (page: number) => (dispatch: Dispatch<AppActions>) => Promise<void>
) =>
  function InfiniteScroll(cProps: any) {
    // const [page, setPage] = useState(0);
    const [node, setNode] = useState<HTMLDivElement | null>(null);
    const state = useAppSelector((store) => store.productsReducer);
    const dispatch = useAppDispatch();

    const fetchMore = useCallback(() => {
      (entries, observer) => {
        console.log('***********FETCH CALLBACK HOC*********');
        const [entry] = entries;
        if (entry.isIntersecting) {
          if (state !== undefined) {
            if (state.meta.hasNext || state.meta.page === 0) {
              dispatch(action(state.meta.page + 1));
            }
          }
        }
      };
    }, []);

    useEffect(() => {
      if (node) {
        const options: IntersectionObserverInit = {
          root: node.parentElement,
          rootMargin: '0px',
          threshold: 0,
        };

        const observer = new IntersectionObserver(fetchMore, options);
        observer.observe(node);
        return () => {
          observer.disconnect();
        };
      }
    }, [state.meta.page, node]);
    return (
      <div>
        <Component {...cProps} />
        <div ref={setNode}></div>
      </div>
    );
  };

export default withInfiniteScroll;
