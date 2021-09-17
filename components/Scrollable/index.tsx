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
  const { elements, className, bullets = false, ...others } = props;
  const [index, setIndex] = useState(0);
  const childrenClassname = 'scrollableChildren';
  const scrollableParent = useRef(null);

  const handleClick: MouseEventHandler<HTMLSpanElement> = (e) => {
    const target = e.target as HTMLSpanElement;
    const position = parseInt(target.dataset.pos as string);
    if (scrollableParent.current !== null) {
      const el: HTMLDivElement = scrollableParent.current;
      const scrollOptions: ScrollToOptions = {
        top: 0,
        left: el
          ? (el.children[0] as HTMLElement).offsetWidth * position
          : 1 * position,
        behavior: 'smooth',
      };
      el.scroll(scrollOptions);
    }
  };

  useEffect(() => {
    if (scrollableParent) {
      const intersectionOp: IntersectionObserverInit = {
        root: scrollableParent.current,
        rootMargin: '0px',
        threshold: 0.75,
      };

      const callback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          // console.log(entry);
          entry.isIntersecting &&
            setIndex(
              //its expecting a className like "itemX" where X is a number from 0 to elements.length
              parseInt(entry.target.className.split(' ')[2].substring(4))
            );
        });
      };

      const observer = new IntersectionObserver(callback, intersectionOp);

      let childrens = document.querySelectorAll('.scrollableChildren');

      childrens.forEach((v) => {
        observer.observe(v);
      });
      // console.log('it should be executed the block code');
      return () => {
        observer.disconnect();
      };
    }
    setIndex(0);
  }, [scrollableParent]);

  //why the data-pos doesnt propagate to cloned element?
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
