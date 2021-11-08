import React from 'react';
import useInfiniteScroll from 'src/hooks/useInfiniteScroll';
import { getProducts } from 'src/redux/actions/products';
import { useAppDispatch, useAppSelector } from 'src/redux/config/store';

interface Props {
  Component: React.FC<any>;
}

const MainContainer: React.FC<Props> = (props) => {
  const { Component } = props;
  const parent = React.useRef<HTMLDivElement>(null);
  const child = React.useRef<HTMLDivElement>(null);
  const myState = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const { products: componentData, loading, error } = myState;

  console.log('-------INSIDE COMPOENT MAIN STATE----------', componentData);

  // const refCallback = React.useCallback((ref) => {
  //   if (ref) {
  //     const options: IntersectionObserverInit = {
  //       root: ref.parentElement,
  //       rootMargin: '0px',
  //       threshold: 0,
  //     };

  //     const fetchMore: IntersectionObserverCallback = (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           console.log('esta intersectando', entry);
  //         }
  //       });
  //     };

  //     const observer = new IntersectionObserver(fetchMore, options);
  //     observer.observe(ref);
  //   }
  // }, []);

  // const [ref, setRef] = React.useState(null);

  // React.useEffect(() => {
  //   const options: IntersectionObserverInit = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0,
  //   };

  //   // const fetchMore: IntersectionObserverCallback = ;

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         console.log('esta intersectando', entry);
  //         dispatch(getProducts(myState.meta.page + 1));
  //       }
  //     });
  //   }, options);
  //   // observer.observe(ref);
  //   const el = document.getElementById('tflol');
  //   if (el) {
  //     observer.observe(el);
  //   }

  //   return () => {
  //     console.log('Se está desconectando el efecto');
  //     observer.disconnect();
  //     setRef(null);
  //   };
  //   // if (ref) {
  //   // }
  // }, [myState, dispatch]);

  const { refCallback } = useInfiniteScroll(getProducts, 'products');
  //hy infinite re - rendering? hovv avoid repeting elements on array of store
  // if (loading) return <h1> Eskeleton for loading status</h1>;
  if (error)
    return (
      <>
        <h2>Hubo un error</h2>
        <p>{error}</p>
      </>
    );

  return (
    <>
      <main className='container'>
        {componentData.map((item: any, i: number) => {
          return <Component key={`fetched ${i}`} {...item} />;
        })}
        {!loading && (
          <div ref={refCallback} id='tflol'>
            observed
          </div>
        )}
      </main>
      <style jsx>{`
        div {
          border: 4px solid crimson;
          width: 100%;
           {
            /* height: 10px; */
          }
        }
        main.container {
          display: flex;
          justify-content: space-between;
          gap: 13px;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
};

export default MainContainer;
