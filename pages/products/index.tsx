import scrollableSection from 'HOC/scrollableSection';
import { useRouter } from 'next/router';
import React from 'react';
import NextImage from 'next/image';
import useFetchData from 'hooks/useFetchData';
import { ProductDetails, Image, scrollableClonedElement } from 'index';
import Love from 'components/Icons/Love';
import Score from 'components/Score';
import Option from '@containers/Options';

const ImageWrapper = (props: Image & scrollableClonedElement) => {
  const { clonedProps, ...others } = props;
  return (
    <>
      <div {...clonedProps}>
        <NextImage {...others} />
      </div>
      <style jsx>
        {`
          div {
            position: relative;
            height: 238px;
          }
        `}
      </style>
    </>
  );
};

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  const res = useFetchData(`/api/products/${id}`);
  const data = res.data as unknown as ProductDetails;
  const error = res.error;
  console.log(data);
  let ImagesContainer;
  if (data) {
    let values = Object.entries(data);
    //image - scrollableSection
    //item -
    ImagesContainer = scrollableSection({
      Component: ImageWrapper,
      componentProps: data.images.map((x) => {
        return { ...x, layout: 'fill' };
      }),
    });
  }

  return (
    <>
      <div>
        {error && <p>{error}</p>}
        {data && (
          <>
            <div>
              <p>this is a product list test</p>
            </div>
            <style jsx>
              {`
                header {
                  display: flex;
                  flex-direction: column;
                  gap: 16px;
                }
                div.title {
                  display: flex;
                  gap: 16px;
                  align-items: center;
                }
              `}
            </style>
          </>
        )}
        ;
      </div>
    </>
  );
};

export default Product;
