import React, { useState, useEffect } from 'react';

const useFetchData = (endpoint: string) => {
  const [response, setResponse] = useState({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    //its needed to put error to null here?
    if (window !== undefined && !endpoint.includes('undefined')) {
      window
        .fetch(endpoint)
        .then((res) => {
          return res.json();
        })
        .then((d) => setResponse({ loading: false, data: d, error: null }))
        .catch((e) =>
          setResponse({ loading: false, data: null, error: e.message })
        );
    }
  }, [endpoint]);

  console.log(response);

  return response;
};

export default useFetchData;
