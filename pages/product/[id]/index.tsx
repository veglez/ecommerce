import scrollableSection from 'HOC/scrollableSection';
import { useRouter } from 'next/router';
import React from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import useFetchData from 'hooks/useFetchData';
import { ProductDetails, Image, scrollableClonedElement } from 'index';
import Heart from 'components/Icons/Heart';
import Score from 'components/Score';
import Option from 'components/Option';
import ReviewCard from 'components/ReviewCard';
import ProductCard from 'components/ProductCard';
import Button from 'components/Button';

export const ImageWrapper = (props: Image & scrollableClonedElement) => {
  const { clonedProps, height = '238px', ...others } = props;
  return (
    <>
      <div {...clonedProps}>
        <NextImage {...others} />
      </div>
      <style jsx>
        {`
          div {
            position: relative;
            height: ${height};
          }
        `}
      </style>
    </>
  );
};

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const res = useFetchData(`/api/products/${id}`);
  const data = res.data as unknown as ProductDetails;
  const error = res.error;

  let ProductImages, RecommendedProducts;
  if (data) {
    ProductImages = scrollableSection({
      Component: ImageWrapper,
      componentProps: data.images.map((x) => {
        return { ...x, layout: 'fill' };
      }),
    });
    RecommendedProducts = scrollableSection({
      Component: ProductCard,
      endpoint: '/api/products',
    });
  }

  return (
    <>
      <>
        {error && <p>{error}</p>}

        {data && (
          <div className='container'>
            <header className='mainHeader'>
              {ProductImages && <ProductImages bullets={true} />}
              <div className='title'>
                <h2>{data.item.name}</h2>
                <Heart size={24} isFavorite={data.item.isFavorite} />
              </div>
              <Score score={data.item.score} starSize={16} />
              <p>{data.item.price}</p>
            </header>
            {data.options?.map((op, i) => {
              const Sec = scrollableSection({
                Component: Option,
                componentProps: op.options,
              });
              return (
                <Sec key={`Option ${i}`} title={op.title} bullets={false} />
              );
            })}
            <section className='itemSpecifications'>
              <h3></h3>
              {data.specifications?.map((esp, i) => {
                const { key: title, value } = esp;
                return (
                  <article
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <h6>{title}</h6>
                    <p style={{ width: '50%', wordBreak: 'break-all' }}>
                      {value}
                    </p>
                  </article>
                );
              })}
              <p> {data.description}</p>
            </section>
            <section>
              <header className='sectionReviewHeader'>
                <div className='reviewTitle'>
                  <h3>Review Product </h3>
                  <Link href={`/product/${id}/reviews`}>
                    <a>See More</a>
                  </Link>
                </div>
                <div className='reviewScoreContainer'>
                  <Score score={data.item.score} starSize={16} />
                  <p>{data.item.score}</p>
                  <p>
                    ({data.reviews.length} Review
                    {data.reviews.length > 1 ? 's' : ''})
                  </p>
                </div>
              </header>
              {data.reviews && <ReviewCard {...data.reviews[0]} />}
            </section>
            {RecommendedProducts && (
              <RecommendedProducts
                title='You Might Also Like'
                bullets={false}
              />
            )}
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
        .sectionReviewHeader {
          margin-block-end: 16px;
        }
        .reviewTitle {
          display: flex;
          justify-content: space-between;
        }
        .reviewScoreContainer {
          display: flex;
          gap: 8px;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default ProductDetail;
