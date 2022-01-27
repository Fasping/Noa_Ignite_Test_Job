import React, { useState } from "react";
import "../Repo/Repo"
import Repo from "../Repo/Repo";
import "./Counter.css"

const Counter = () => {

  const [number, setNumber] = useState(0);

  const decrement = () => {
    number > 0 && setNumber(number - 1);
  };

  const increment = () => {
    setNumber(number + 1);
  };

    return (
      <div>
        <div className="container">
          <button className="decrement" onClick={decrement}>
            - DECREMENT
          </button>
          <h1 className="counter">Counter: {number} </h1>
          <button className="increment" onClick={increment}>
            + INCREMENT
          </button>
        </div>
        <div className="repo">
          <Repo counter={number} />
        </div>
      </div>
    );
}

export default Counter;