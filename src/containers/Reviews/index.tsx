import ReviewCard from 'components/ReviewCard';
import Score from 'components/Score';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { getReviews } from 'src/redux/actions/reviews';
import { useAppDispatch, useAppSelector } from 'src/redux/config/store';
import useObjectIdVerification from 'src/hooks/useObjectIdVerification';

interface Props {
  productId: string;
  score: number;
}

const Reviews: React.FC<Props> = (props) => {
  const { productId, score } = props;
  const reviewsState = useAppSelector((s) => s.reviews);
  const dispatch = useAppDispatch();
  console.log('store of revie', reviewsState);

  // const state = reviewsState.reviews.filter(
  //   (r) => r.productId === productId
  // )[0];
  // useEffect(() => {
  //   // @ts-ignore: the type should recieves negative sign for descending sorting
  //   if (!state) {
  //     console.log('im dispatching....');
  //     dispatch(getReviews({ limit: 5, productId, sortBy: '-score' }));
  //   }
  // }, [state]); //eslint-disable-line

  const {
    loading,
    error,
    data: state,
  } = useObjectIdVerification({
    cb: getReviews,
    stateSelector: 'reviews',
    idName: 'productId',
    useCurrentId: false,
    extra: { limit: 5, sortBy: '-score' },
    redirect: false,
  });

  console.log('the state of container revie', state);

  if (loading) return <h3>Searching for reviews</h3>;

  if (error)
    return (
      <div>
        <h3>Hubo un error al traer los datos</h3>
        <p>{error}</p>
        <p>Me parece que redirecciona al home</p>
      </div>
    );

  // if (!!state) return <h2>Nothing to sho</h2>;
  return (
    <>
      <section>
        <header className='sectionReviewHeader'>
          <div className='reviewTitle'>
            <h3>Review Product </h3>
            <Link href={`/products/${productId}/reviews`}>
              <a>See More</a>
            </Link>
          </div>
          <div className='reviewScoreContainer'>
            <Score score={score} starSize={16} selectable={false} />
            <p>{score}</p>
            <p>
              ({state?.paginator.data && state?.paginator.docsPerPage} Review
              {state?.paginator.data && state?.paginator.docsPerPage > 1
                ? 's'
                : ''}
              )
            </p>
          </div>
        </header>
        {reviewsState.loading ? (
          <h3>Loading reviews...</h3>
        ) : reviewsState.error ? (
          <h3> Error al cargar reviews {reviewsState.error} </h3>
        ) : (
          // <h3> Se han cargado las review</h3>
          <div>
            {state?.paginator.data?.map((d) => (
              <ReviewCard key={d.id} {...d} />
            ))}
          </div>
        )}
      </section>
      <style jsx>{`
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

export default Reviews;
