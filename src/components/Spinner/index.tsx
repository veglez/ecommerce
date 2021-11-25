import React, { createElement, useCallback } from 'react';
import css from 'styled-jsx/css';

const Spinner = () => {
  const bullets = useCallback(() => {
    const items = [];
    for (let index = 0; index < 9; index++) {
      const element = createElement(
        'div',
        {
          className: 'bullet',
          style: {
            transform: `rotate(${index * (360 / 9)}deg)`,
          },
        },
        createElement('div', {
          className: 'bullet_inner',
          style: {
            animationDelay: `${index * 0.1}s`,
          },
        })
      );
      items.push(element);
    }
    return items;
  }, []);

  return (
    <>
      <div className='container'>
        {bullets().map((El, i) => {
          return El;
        })}
      </div>

      <style jsx>{`
        div.container :global(div.bullet) {
          width: 5%;
          height: 50%;
          position: absolute;
        }

        div.container :global(div.bullet_inner) {
          width: 10px;
          height: 10px;
          background-color: var(--dark);
          border-radius: 50%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 10;
          animation: spin 0.9s linear infinite;
        }

        @keyframes spin {
          from {
            transform: scale(0)
          }
          to {
            transform: scale(1)
          }
        }

        div.container {
          width: 100%;
          height: 150px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default Spinner;
