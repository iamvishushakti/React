import { useState } from "react";

function App() {
  // State
  let [current_counter, setCounter] = useState(0);

  // Increment Function
  const incrementValue = () => {
    setCounter(++current_counter);
  };

  // Decrement Function
  const decrementValue = () => {
    if(current_counter>0){
      setCounter(--current_counter);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Counter App</h1>

      <h2>Current Counter Value: {current_counter}</h2>

      <button
        onClick={incrementValue}
        style={{
          padding: "10px 20px",
          marginRight: "10px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        + Increment
      </button>

      <button
        onClick={decrementValue}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        - Decrement
      </button>
    </div>
  );
}

export default App;