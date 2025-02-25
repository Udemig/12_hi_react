import { useState } from "react";
import Count from "../Count";

const Example = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(null);

  return (
    <div className="container mt-5">
      <h1 className="mb-3">Example</h1>

      <div className="d-flex gap-4">
        <button onClick={() => setCount(count + 1)} className="btn btn-success">
          Arttır
        </button>

        <input type="text" onChange={(e) => setInput(e.target.value)} />

        <span>{input}</span>
      </div>

      <Count count={count} />
      <Count count={count} />
      <Count count={count} />
      <Count count={count} />
      <Count count={count} />
    </div>
  );
};

export default Example;
