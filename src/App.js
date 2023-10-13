import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(1000);
  }, []);

  return (
    <div className="App">
      <button onClick={() => setCount(count - 1)}>-</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
