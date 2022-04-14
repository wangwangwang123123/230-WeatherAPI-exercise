import React, { useState } from "react";

export default function LikeCounter() {
  const [count, setCount] = useState(0);
  const [discount, setdisCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setdisCount(discount - 1);
  };
  return (
    <div>
      <button onClick={increment}>{count}like</button>
      <button onClick={decrement}>{discount}dislike</button>
    </div>
  );
}
