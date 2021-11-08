import React, { useState, useEffect } from 'react';

const useFetchData = (endpoint: string) => {
  const [response, setResponse] = useState({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    //its needed to put error to null here?
    async () => {
      if (window !== undefined && !endpoint.includes('undefined')) {
        try {
          const response = await window.fetch(endpoint);
          const payload = await response.json();
          if (!response.ok) {
            throw new Error(payload.err);
          }
          setResponse({ data: payload, loading: false, error: null });
        } catch (error) {
          setResponse({ data: null, error: error.message, loading: false });
        }
      }
    };
  }, [endpoint]);
  return response;
};

export default useFetchData;
