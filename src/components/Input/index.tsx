import React from 'react';
import styles from './styles.module.scss';

interface Props {
  name: string;
  type: string;
  id: string;
  placeholder?: string;
  Icon?: React.FC<any>;
}

const Input = React.forwardRef<HTMLInputElement, Props>(function Input(
  props,
  ref
) {
  const { type, name, id, Icon, placeholder } = props;
  const [value, setValue] = React.useState('');

  const handleInput = () => {
    if (typeof ref === 'object' && ref?.current) {
      setValue(ref.current.value);
    }
  };

  return (
    <>
      <label htmlFor={id}>
        {Icon && <Icon />}
        <input
          className={styles.font}
          id={id}
          type={type}
          name={name}
          value={value}
          ref={ref}
          onInput={handleInput}
          placeholder={placeholder}
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
