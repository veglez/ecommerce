import React from 'react';
import Alert from 'components/Alert';
import Spinner from 'components/Spinner';

interface Props {
  alertMessage: string | null;
  loading: boolean;
  type?: 'Danger' | 'Alert' | 'Success';
}

const Form: React.FC<Props> = ({
  children,
  alertMessage,
  loading,
  type = 'Danger',
}) => {
  return (
    <>
      <div className='container'>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {' '}
            <Alert type={type}>{alertMessage}</Alert>
            {children}
          </>
        )}
      </div>

      <style jsx>{`
        div.container {
          min-height: 262px;
        }
        div :global(p:first-child) {
          margin: 16px 0;
        }
        div.container > :global(form) {
          min-height: 212px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
      `}</style>
    </>
  );
};

export default Form;
