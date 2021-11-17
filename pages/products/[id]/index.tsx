import { useRouter } from 'next/router';
import React from 'react';
import Heart from 'components/Icons/Heart';
import Score from 'components/Score';
import Button from 'components/Button';
import Options from '@containers/Options';
import Reviews from '@containers/Reviews';
import useObjectIdVerification from 'src/hooks/useObjectIdVerification';
import { getOneProduct } from 'src/redux/actions/products';

const ProductDetail = () => {
  const { id } = useRouter().query;
  const {
    error,
    loading,
    data: res,
  } = useObjectIdVerification({
    cb: getOneProduct,
    stateSelector: 'products',
    redirect: true,
    useCurrentId: true,
  });

  if (error)
    return (
      <div>
        <h3>{error}</h3>
        <p>Redireccionando a la página principal</p>
      </div>
    );

  if (loading) return <h2>Loading product... </h2>;
  return (
    <>
      <>
        {!!res && (
          <div className='container'>
            <header className='mainHeader'>
              {/* {ProductImages && <ProductImages bullets={true} />} */}
              <div className='title'>
                <h2>{res.name}</h2>
                <Heart size={24} isFavorite={true} />
              </div>
              <Score score={res.score} starSize={16} selectable={false} />
              <p>{res.price}</p>
            </header>
            {res.options && (
              <div>
                {res.options.map((d) => (
                  <Options key={d.title} {...d} />
                ))}
              </div>
            )}
            <section className='itemSpecifications'>
              <h3>Specifications</h3>
              <div>
                {res.specifications?.map((esp, i) => {
                  const { key: title, value } = esp;
                  return (
                    <article
                      key={i}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <h6>{title}:</h6>
                      <p
                        style={{
                          width: '50%',
                          textAlign: 'end',
                          wordBreak: 'break-all',
                        }}
                      >
                        {value}
                      </p>
                    </article>
                  );
                })}
              </div>
              <p> {res.description}</p>
            </section>
            <Reviews productId={id as string} score={res.score} />
            {/* {RecommendedProducts && (
              <RecommendedProducts
                title='You Might Also Like'
                bullets={false}
              />
            )} */}
            <Button text='Add to Cart' />
          </div>
        )}
      </>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 16px 0;
        }
        .mainHeader {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        div.title {
          display: flex;
          gap: 16px;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default ProductDetail;
