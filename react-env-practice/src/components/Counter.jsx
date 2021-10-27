import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button type="button" onClick={() => setCount(count + 1)}>
        ++
      </button>
      <h1>{count}</h1>
    </>
  );
}

export default Counter;
