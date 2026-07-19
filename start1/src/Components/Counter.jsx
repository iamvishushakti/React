import { useState } from "react";

function Counter() {

    let [current_counter, setCounter] = useState(1)
//   let current_counter = 6;

  const incrementValue = () => {
    setCounter(1);
  };

  const decrementValue = () => {
    setCounter(5);
  };

  return (
    <div>
      <p>Current Counter Value {current_counter}</p>
      <button onClick={incrementValue()}>+ Increment</button>
      <button onClick={decrementValue()}>- Decrement</button>
    </div>
  );
}

export default Counter;
