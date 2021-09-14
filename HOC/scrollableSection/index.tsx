import Scrollable from 'components/Scrollable';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const scrollableSection = (
  Component: React.FunctionComponent<{}> | React.ForwardedRef<{}> | string,
  endpoint: string
) =>
  function NewSection(props: { title?: string; bullets: boolean }) {
    const { title, bullets } = props;
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
      if (window !== undefined) {
        window
          .fetch(endpoint)
          .then((res) => res.json())
          .then((d) => setData(d))
          .catch((e) => setError(e.message));
      }
    }, []);

    const elements = data.map((d) => React.createElement(Component, d));

    return (
      <section className={styles.container}>
        {error ? (
          <h2>{error}</h2>
        ) : (
          <>
            {title && <h2>{title}</h2>}
            <Scrollable elements={elements} bullets={bullets} />
          </>
        )}
      </section>
    );
  };

export default scrollableSection;
