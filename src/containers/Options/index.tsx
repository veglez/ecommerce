import scrollableSection from 'src/HOC/scrollableSection';
import { ProductOption } from 'index';
import React from 'react';
import Option from 'components/Option';

const Options = (props: ProductOption) => {
  const { title, values } = props;

  const OptionsSection = scrollableSection({
    Component: Option,
    componentProps: values.map((v) => {
      return { val: v };
    }),
  });

  return <OptionsSection bullets={false} title={`Select ${title}`} />;
};

const stateMapToProps = (reducer: any) => reducer.optionReducer;

export default Options;
