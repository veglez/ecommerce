import React from 'react';
import Image from 'next/image';
import { Image as ImageType } from 'index';
const Avatar = (props: any) => {
  const imageProps: ImageType = props.imageProps;
  const className: string = props.className;
  return (
    <>
      <div className={className}>
        <Image {...imageProps} layout='fill' />
      </div>
      <style jsx>
        {`
          div {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            position: relative;
            overflow: hidden;
            display: grid;
            place-items: center;
          }
        `}
      </style>
    </>
  );
};

export default Avatar;
