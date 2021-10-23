import { Image, scrollableClonedElement } from 'index';
import NextImage from 'next/image';

const ImageWrapper = (props: Image & scrollableClonedElement) => {
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

export default ImageWrapper;
