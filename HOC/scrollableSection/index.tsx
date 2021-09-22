import Scrollable from 'components/Scrollable';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

interface scrollableParams {
  Component:
    | React.FunctionComponent<{}>
    | React.ForwardedRef<{}>
    | string
    | Element;
  endpoint?: string;
  componentProps?: any;
}

const scrollableSection = (params: scrollableParams) =>
  function NewSection(props: { title?: string; bullets: boolean }) {
    const { title, bullets } = props;
    const { Component, endpoint, componentProps } = params;
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    let elements = null;

    useEffect(() => {
      if (window !== undefined && endpoint !== undefined) {
        window
          .fetch(endpoint)
          .then((res) => res.json())
          .then((d) => setData(d))
          .catch((e) => setError(e.message));
      }
    }, [endpoint]);

    if (endpoint !== undefined) {
      elements = data.map((d) => React.createElement(Component, d));
    } else {
      elements = componentProps.map((d: any) =>
        React.createElement(Component, d)
      );
    }

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
