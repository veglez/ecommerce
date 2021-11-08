import ReviewCard from 'components/ReviewCard';
import Score from 'components/Score';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { getReviews } from 'src/redux/actions/reviews';
import { useAppDispatch, useAppSelector } from 'src/redux/config/store';

interface Props {
  productId: string;
  score: number;
}

const Reviews: React.FC<Props> = (props) => {
  const { productId, score } = props;
  const state = useAppSelector((s) => s.reviews);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // @ts-ignore: the type should recieves negative sign for descending sorting
    dispatch(getReviews({ limit: 5, productId, sortBy: '-score' }));
  }, []); //eslint-disable-line

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
            <Score score={score} starSize={16} />
            <p>{score}</p>
            <p>
              ({state.reviews && state.meta.docsPerPage} Review
              {state.reviews && state.meta.docsPerPage > 1 ? 's' : ''})
            </p>
          </div>
        </header>
        {state.loading ? (
          <h3>Loading reviews...</h3>
        ) : state.error ? (
          <h3> Error al cargar reviews {state.error} </h3>
        ) : (
          // <h3> Se han cargado las review</h3>
          <div>
            {state.reviews?.map((d) => (
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
