import Modal from 'components/Modal';
import React, { HTMLAttributes, useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { IoCloseCircleOutline } from 'react-icons/io5';

interface Props extends HTMLAttributes<HTMLImageElement> {
  photo: File;
  cb: Function;
  photos: File[];
}

const ThumbnailUpdate: React.FC<Props> = (props) => {
  const { photo, cb, photos } = props;
  const [isOpen, setIsOpen] = useState(false);
  const src = URL.createObjectURL(photo);
  const alt = photo.name;
  console.log('open = ', isOpen);
  const handleOpen = () => {
    setIsOpen(true);
    if (!!window) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    if (!!window) {
      // window.scrollTo(0, 0);
      document.body.style.overflow = 'scroll';
    }
  };

  return (
    <>
      <div>
        <img
          onClick={handleOpen}
          src={src}
          alt={alt}
          onLoad={() => URL.revokeObjectURL(src)}
        />
        <IoIosCloseCircleOutline
          onClick={() => cb(photos.filter((p) => p !== photo))}
        />
        <Modal isOpen={isOpen}>
          <img className='inner' src={src} alt={alt} />
          <IoCloseCircleOutline size={48} onClick={handleClose} />
        </Modal>
      </div>

      <style jsx>{`
        div > img {
          width: 60px;
          height: 60px;
        }
        :global(img.inner) {
          width: 100%;
          height: auto;
        }
      `}</style>
    </>
  );
};

export default ThumbnailUpdate;
