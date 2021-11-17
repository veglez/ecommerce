import Button from 'components/Button';
import Input from 'components/Input';
import Score from 'components/Score';
import UpdateImage from 'components/UpdateImage';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { INPUT_FILE } from 'src/config/constants';
import useAuthentication from 'src/hooks/useAuthentication';
import useObjectIdVerification from 'src/hooks/useObjectIdVerification';
import { getOneProduct } from 'src/redux/actions/products';
import { publishReview } from 'src/redux/actions/reviews';

import { useAppDispatch, useAppSelector } from 'src/redux/config/store';

function AddReview() {
  const [value, setValue] = React.useState('');
  const [selectedScore, setSelectedScore] = React.useState(0);
  // const userState = useAppSelector((s) => s.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;

  useAuthentication();

  const {
    error,
    loading,
    data: item,
  } = useObjectIdVerification({
    cb: getOneProduct,
    stateSelector: 'products',
    redirect: true,
    useCurrentId: true,
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    let toSend = new FormData();

    for (const el of form.elements) {
      const elementType = el.tagName.toLowerCase();
      if (elementType === 'textarea') {
        const node = el as HTMLTextAreaElement;
        console.log('I NEED TO TRIGGER LENGTH VALIDATION');
        toSend.append(node.name, node.value);
      }
      if (elementType === 'input') {
        const node = el as HTMLInputElement;
        if (node.name === INPUT_FILE) {
          if (node.files)
            for (const image of node.files) {
              toSend.append(node.name, image);
            }
        } else {
          toSend.append(node.name, node.value);
        }
      }
    }
    dispatch(publishReview(id, toSend));
    router.back();
  };

  if (error)
    return (
      <div>
        <h3>{error}</h3>
        <p>Redireccionando a la página principal</p>
      </div>
    );
  if (loading) return <h3>Loading response</h3>;
  return (
    <>
      <section>
        <header>
          <h2>
            Please write Overall level of satisfaction with your shipping /
            Delivery Service
          </h2>
          <div className='scoreContainer'>
            <Score
              className={'starsContainer'}
              starSize={32}
              selectable={true}
              callback={setSelectedScore}
            />
            <p>{selectedScore}/5</p>
          </div>
        </header>
        <form onSubmit={handleSubmit}>
          <Input
            type='number'
            id='score'
            name='score'
            value={selectedScore}
            className={'scoreInputLabel'}
            min={0}
            max={5}
          />
          <label>
            <p>Write Your Review</p>
            <textarea
              required
              id='opinion'
              name='opinion'
              minLength={10}
              placeholder={'Write your review here'}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            ></textarea>
          </label>

          <UpdateImage />

          <Button
            text='Publish review'
            style={{ width: '100%', marginBlockStart: 24 }}
          />
        </form>
      </section>
      <style jsx>{`
        header {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        textarea {
          width: 100% !important;
          height: 160px;
          min-height: max-content !important;
          border: none !important;
          outline: 1px solid var(--light);
          border-radius: var(--radius-textarea);
          padding: 16px;
        }
        textarea:focus-within {
          outline: 1px solid var(--blue);
        }
        label p {
          padding: 24px 0 12px 0;
        }
        :global(.scoreInputLabel) {
          display: none !important;
        }
        :global(.starsContainer) {
          gap: 16px;
        }
        .scoreContainer {
          display: flex;
          gap: 16px;
        }
      `}</style>
    </>
  );
}

export default AddReview;
