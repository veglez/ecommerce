import { scrollableProps } from 'components/Scrollable/types';
import { Image, scrollableClonedElement } from 'index';
import NextImage, { ImageProps } from 'next/image';

interface Props {
  Image
}

type Prop = Image & scrollableClonedElement;

const ImageWrapper = (props: ImageProps) => {
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
