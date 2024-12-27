import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(1);

  const addValue = () => {
    if (counter < 16) {
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button style={{ margin: 10 }} onClick={addValue}>
        Add value {counter}
      </button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  );
}

export default App;
