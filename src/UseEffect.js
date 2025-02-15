import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [clicked, setClicked] = useState(""); // ✅ Default value set
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("we are in the useEffect!"); // This runs when 'clicked' changes
  }, [clicked]); // ✅ Triggers only when 'clicked' changes

  return (
    <div>
      <button onClick={() => setClicked("I")}>I</button>
      <br />
      <hr />
      <button onClick={() => setClicked("am")}>am</button>
      <br />
      <hr />
      <button onClick={() => setClicked("Cyberlight")}>Cyberlight</button>
      <br />
      <hr />
      <h1>{clicked}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>Count: {count}</h2>
    </div>
  );
};

export default UseEffect;
