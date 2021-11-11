import Button from 'components/Button';
import Input from 'components/Input';
import Score from 'components/Score';
import UpdateAImage from 'components/UpdateImage';
import { useRouter } from 'next/router';
import React from 'react';
import { login, refresh } from 'src/redux/actions/auth';
import { useAppDispatch, useAppSelector } from 'src/redux/config/store';

function AddReview() {
  const [value, setValue] = React.useState('');
  const [selectedScore, setSelectedScore] = React.useState(0);
  const userState = useAppSelector((s) => s.auth);
  // const router = useRouter();
  // console.log(router);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(refresh());
    console.log(userState);
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!userState.user) {
      router.push('/login');
    }
    const form = e.target as HTMLFormElement;
    for (const el of form.elements) {
      const elementType = el.tagName.toLowerCase();
      if (['input', 'textarea'].includes(elementType)) {
        const node = el as HTMLInputElement | HTMLTextAreaElement;
        console.log(node.value);
      }
    }
  };
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
              id='comment'
              name='comment'
              placeholder={'Write your review here'}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            ></textarea>
          </label>

          <UpdateAImage />

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
