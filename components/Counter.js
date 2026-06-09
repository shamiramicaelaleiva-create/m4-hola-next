'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [max, setMax] = useState(10);

  return (
    <div className="counter">
      
      {count === max && <p>Llegaste al límite</p>}

      <h2>{count}</h2>

      <input
        type="number"
        value={max}
        onChange={(e) => setMax(Number(e.target.value))}
      />

      <br /><br />

      <button
        onClick={() => setCount(count - 1)}
        disabled={count === 0}
      >
        -
      </button>

      <button
        onClick={() => setCount(count + 1)}
        disabled={count >= max}
      >
        +
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <button
        onClick={() => setCount(Math.min(count + 10, max))}
        disabled={count >= max}
      >
        +10
      </button>
    </div>
  );
}