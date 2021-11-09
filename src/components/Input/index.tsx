import { InputHTMLAttributes } from 'react';
import React from 'react';
import styles from './styles.module.scss';

interface Props extends Partial<InputHTMLAttributes<HTMLInputElement>> {
  Icon?: React.FC<any>;
}

const Input = React.forwardRef<HTMLInputElement, Props>(function Input(
  props,
  ref
) {
  const { id, type, name, Icon, className, ...rest } = props;
  const [value, setValue] = React.useState<any>(undefined);

  const handleInput = () => {
    if (typeof ref === 'object' && ref?.current) {
      setValue(ref.current.value);
    }
  };

  return (
    <>
      <label htmlFor={id} className={className}>
        {Icon && <Icon />}
        <input
          className={styles.font}
          id={id}
          type={type}
          name={name}
          value={value}
          ref={ref}
          onInput={handleInput}
          {...rest}
        />
      </label>
      <style jsx>{`
        label {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border: 1px solid var(--light);
          border-radius: 5px;
        }
        svg {
          fill: var(--gray);
        }

        label:focus-within {
          outline: 1px solid var(--blue);
        }
        label:focus-within svg {
          fill: var(--blue);
        }

        input {
          outline: none;
          border: none;
        }
      `}</style>
    </>
  );
});

export default Input;
