import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="counter-container">
        <h1>Simple Counter</h1>
        <h2 className="count-display">{count}</h2>
        <div className="button-group">
          <button className="counter-btn" onClick={() => setCount(count + 1)}>Increase</button>
          <button className="counter-btn" onClick={() => setCount(count - 1)}>Decrease</button>
          <button className="counter-btn reset-btn" onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
