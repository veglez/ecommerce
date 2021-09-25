import React, { useState, useEffect } from 'react';

const useFetchData = (endpoint: string) => {
  const [data, setData] = useState();
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
    if (window !== undefined) {
      window
        .fetch(endpoint)
        .then((res) => res.json())
        .then(setData)
        .catch((e) => setError(e.message));
    }
  }, [endpoint]);

  return { data, error };
};

export default useFetchData;
