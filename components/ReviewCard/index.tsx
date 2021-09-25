import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import Score from 'components/Score';
import { Review } from 'index';
import Avatar from 'components/Avatar';

const ReviewCard = (props: Review) => {
  const { user, score, comment, photos, publishedDate } = props;
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <Avatar imageProps={user.avatar} className={styles.avatar} />
          <h4 className={styles.name}>
            {user.name} {user.lastName}
          </h4>
          <Score score={score} className={styles.score} />
        </header>
        <p>{comment}</p>
        {photos.length > 0 && (
          <div className={styles.photos}>
            {photos.map((p) => {
              return (
                <Image
                  key={p.alt}
                  src={p.src}
                  alt={p.alt}
                  width={72}
                  height={72}
                  className={styles.photo}
                />
              );
            })}
          </div>
        )}
        <p>{publishedDate}</p>
      </div>
    </>
  );
};

export default ReviewCard;
