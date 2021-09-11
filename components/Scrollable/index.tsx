import React, {
  MouseEventHandler,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { scrollableProps } from './types';

const Scrollable = (props: scrollableProps) => {
  const { elements, className, bullets, ...others } = props;
  const [index, setIndex] = useState(0);
  const scrollableParent = useRef(null);
  const childrenClassname = 'scrollableChildren';

  const handleClick: MouseEventHandler<HTMLSpanElement> = (e) => {
    const target = e.target as HTMLSpanElement;
    const scrollOptions: ScrollToOptions = {
      top: 0,
      left: scrollableParent.current
        ? scrollableParent.current.children[0].offsetWidth
        : 1 * parseInt(target.dataset.pos as string),
      behavior: 'smooth',
    };
    (scrollableParent.current as unknown as HTMLElement).scroll(scrollOptions);
  };

  useEffect(() => {
    if (scrollableParent) {
      const intersectionOp: IntersectionObserverInit = {
        root: scrollableParent.current,
        rootMargin: '0px',
        threshold: 0.75,
      };

      const observer = new IntersectionObserver(
        (
          entries: IntersectionObserverEntry[],
          observer: IntersectionObserver
        ) => {
          // setIndex((ps) => ps + 1);
          entries.forEach((entry) => {
            entry.isIntersecting &&
              setIndex(
                //its expecting a className like "itemX" where X is a number from 0 to elements.length
                parseInt(entry.target.className.split(' ')[2].substring(4))
              );
          });
        },
        intersectionOp
      );

      let childrens = document.querySelectorAll('.scrollableChildren');

      childrens.forEach((v) => {
        observer.observe(v);
      });

      return () => {
        observer.disconnect();
      };
    }
    setIndex(0);
  }, [scrollableParent]);

  return (
    <div className={clsx(styles.container, className)}>
      <div ref={scrollableParent} className={styles.scrollableParent}>
        {elements.map((el: ReactElement, i: number) => {
          return React.cloneElement(el, {
            key: i,
            'data-pos': i,
            className: `${childrenClassname} item${i}`,
          });
        })}
      </div>
      {bullets && (
        <div className={styles.bullets}>
          {elements.map((el, i) => {
            return (
              <span
                key={i}
                data-pos={i}
                className={clsx(styles.bullet, i === index && styles.active)}
                onClick={handleClick}
              ></span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Scrollable;
