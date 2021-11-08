import React from 'react';

function AddReview() {
  const [value, setValue] = React.useState('');
  return (
    <div>
      <h3>Please select your review</h3>
      <form>
        <textarea value={value} onChange={(e) => setValue(e.target.value)}>
          Something
        </textarea>
      </form>
    </div>
  );
}

export default AddReview;
