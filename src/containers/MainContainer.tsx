import React from 'react';
import useInfiniteScroll from 'src/hooks/useInfiniteScroll';
import { getProducts } from 'src/redux/actions/products';
import { useAppDispatch, useAppSelector } from 'src/redux/config/store';

interface Props {
  Component: React.FC<any>;
}

const MainContainer: React.FC<Props> = (props) => {
  const { Component } = props;
  const myState = useAppSelector((state) => state.products);
  const { products: componentData, loading, error } = myState;

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
