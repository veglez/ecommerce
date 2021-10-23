import React, { useEffect, useState } from 'react';

const withFetchedData = (Component: any, endpoint: string) => {
  return function WithFetched(props: any) {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
      setError('');
      if (window !== undefined) {
        //CHECK set data
        window
          .fetch(endpoint)
          .then((res) => {
            console.log('------RES-------', res);
            return res.json();
          })
          .then((d) => {
            console.log(d);
            setData(d.data);
          })
          .catch((e) => setError(e.message));
      }
    }, []);

    return (
      <>
        <div className='container'>
          {error && <h2>{error}</h2>}
          {data.map((item: any, i) => {
            return <Component key={`fetched ${i}`} {...item} />;
          })}
        </div>
        <style jsx>{`
          div.container {
            display: flex;
            justify-content: space-between;
            gap: 13px;
            flex-wrap: wrap;
          }
        `}</style>
      </>
    );
  };
};

export default withFetchedData;
