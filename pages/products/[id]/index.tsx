import scrollableSection from 'src/HOC/scrollableSection';
import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';
import Heart from 'components/Icons/Heart';
import Score from 'components/Score';
import ReviewCard from 'components/ReviewCard';
// import ProductCard from 'components/ProductCard';
import Button from 'components/Button';
import ImageWrapper from 'components/ImageWrapper';
import Options from '@containers/Options';
import { useAppSelector } from 'src/redux/config/store';
import Reviews from '@containers/Reviews';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const state = useAppSelector((s) => s.products);
  console.log('product id index', state); //eslint-disable-line

  const [res] = state.products.filter((item) => item.id === id);
  // const endpoint = `${process.env.NEXT_PUBLIC_HOST}/products/${id}`;
  // const res: fetchedData<ProductItem> = useFetchData(endpoint);
  // const reviewsEndpoint = `${process.env.NEXT_PUBLIC_HOST}/products/${id}/reviews`;
  // const reviews: fetchedData<paginator<Review>> = useFetchData(reviewsEndpoint);

  let ProductImages;
  if (res) {
    ProductImages = scrollableSection({
      Component: ImageWrapper,
      componentProps: res.images.map((x) => {
        return { ...x, layout: 'fill' };
      }),
    });
  }
  // return <h1>Debbuging</h1>;
  //this should be out in a component
  // if (res.error) return <h2>{res.error}</h2>;
  // if (res.loading) return <h2>Loading...{endpoint}</h2>;
  return (
    <>
      <>
        {res !== null && (
          <div className='container'>
            <header className='mainHeader'>
              {ProductImages && <ProductImages bullets={true} />}
              <div className='title'>
                <h2>{res.name}</h2>
                <Heart size={24} isFavorite={true} />
              </div>
              <Score score={res.score} starSize={16} />
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
