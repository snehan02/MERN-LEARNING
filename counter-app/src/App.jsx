import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Counter App</h1>
      </header>

      <div className="counter-card">
  <div className="count-box">
    <h2>{count}</h2>
  </div>

  <div className="buttons">
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    <button onClick={reset}>Reset</button>
  </div>
</div>

      <div className="message-card">
        <p>
          {count === 0
            ? "Counter is at zero"
            : count > 10
            ? "High count!"
            : "Keep counting!"}
        </p>
      </div>
    </div>
  );
}

export default App;


