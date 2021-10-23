import scrollableSection from 'HOC/scrollableSection';
import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';
import useFetchData from 'hooks/useFetchData';
import { ProductDetails } from 'index';
import Heart from 'components/Icons/Heart';
import Score from 'components/Score';
import Option from 'components/Option';
import ReviewCard from 'components/ReviewCard';
import ProductCard from 'components/ProductCard';
import Button from 'components/Button';
import ImageWrapper from 'components/ImageWrapper';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const endpoint = `${process.env.NEXT_PUBLIC_HOST}/products/${id}`;
  const res: {
    loading: boolean;
    error: string | null;
    data: null | ProductDetails;
  } = useFetchData(endpoint);

  let ProductImages, OptionsSection;
  if (res.data) {
    ProductImages = scrollableSection({
      Component: ImageWrapper,
      componentProps: res.data.images.map((x) => {
        return { ...x, layout: 'fill' };
      }),
    });

    OptionsSection = scrollableSection({
      Component: Option,
      componentProps: res.data.options,
    });
  }
  return (
    <>
      <>
        {res.error && <p>{res.error}</p>}

        {res.data !== null && (
          <div className='container'>
            <header className='mainHeader'>
              {ProductImages && <ProductImages bullets={true} />}
              <div className='title'>
                <h2>{res.data.name}</h2>
                <Heart size={24} isFavorite={res.data.isFavorite} />
              </div>
              <Score score={res.data.score} starSize={16} />
              <p>{res.data.price}</p>
            </header>
            {<OptionsSection />}
            <section className='itemSpecifications'>
              <h3></h3>
              {res.data.specifications?.map((esp, i) => {
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
              <p> {res.data.description}</p>
            </section>
            <section>
              <header className='sectionReviewHeader'>
                <div className='reviewTitle'>
                  <h3>Review Product </h3>
                  <Link href={`/products/${id}/reviews`}>
                    <a>See More</a>
                  </Link>
                </div>
                <div className='reviewScoreContainer'>
                  <Score score={res.data.score} starSize={16} />
                  <p>{res.data.score}</p>
                  <p>
                    ({res.data.reviews.length} Review
                    {res.data.reviews.length > 1 ? 's' : ''})
                  </p>
                </div>
              </header>
              {res.data.reviews.length > 0 && (
                <ReviewCard {...res.data.reviews[0]} />
              )}
            </section>
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
