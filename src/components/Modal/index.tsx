import React, { useState } from 'react';
import DOM from 'react-dom';
import { IoCloseCircleOutline } from 'react-icons/io5';

interface Props {
  isOpen: boolean;
}

const Modal: React.FC<Props> = (props) => {
  const { children, isOpen } = props;

  return DOM.createPortal(
    <>
      <div className='container'>
        <div>{children}</div>
      </div>
      <style jsx>{`
        div.container {
          position: absolute;
          bottom: 0;
          height: 100%;
          left: 0;
          right: 0;
          display: ${isOpen ? 'grid' : 'none'};
          place-items: center;
          background-color: #fff;
        }
      `}</style>
    </>,
    document.body
  );
};

export default Modal;
