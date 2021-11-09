import Button from 'components/Button';
import Input from 'components/Input';
import Score from 'components/Score';
import UpdateAImage from 'components/UpdateImage';
import React from 'react';

function AddReview() {
  const [value, setValue] = React.useState('');
  const [selectedScore, setSelectedScore] = React.useState(0);
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
        <form>
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
              id='userComment'
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
