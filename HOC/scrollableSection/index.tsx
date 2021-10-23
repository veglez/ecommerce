import Scrollable from 'components/Scrollable';
import useFetchData from 'hooks/useFetchData';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

interface scrollableParams {
  Component: React.FunctionComponent<{}> | React.ForwardedRef<{}> | string;
  componentProps: any;
}

const scrollableSection = (params: scrollableParams) =>
  function NewSection(props: { title?: string; bullets: boolean }) {
    const { title, bullets } = props;
    const { Component, componentProps } = params;

    let elements = componentProps.map((d: any) =>
      React.createElement(Component, d)
    );

    return (
      <section className={styles.container}>
        {title && <h2>{title}</h2>}
        <Scrollable elements={elements} bullets={bullets} />
      </section>
    );
  };

export default scrollableSection;
