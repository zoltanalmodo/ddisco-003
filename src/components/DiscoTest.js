import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const DiscoTest = () => {
  const { data, loading, error, updateIndex_001 } = useContext(GlobalContext);

  const handleUpdate = () => {
    updateIndex_001(5); // Example of updating an index
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Disco Component</h1>
      <p>API Data: {JSON.stringify(data)}</p>
      <button onClick={handleUpdate}>Update Index</button>
    </div>
  );
};


// components/Disco.js
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Disco = () => {
  const { data, loading, error } = useContext(GlobalContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Disco Component</h1>
      {data && (
        <div>
          <p>{data.message}</p>
        </div>
      )}
    </div>
  );
};
