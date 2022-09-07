import React, { useState, useEffect } from "react";
import "./Sticks.css";
import bblSort from "../../../algorithms/bubbelSort";
import insertionSort from "../../../algorithms/insertionSort";
import cocktailSort from "../../../algorithms/cocktailSort";
import selectionSort from "../../../algorithms/selectionSort";

const Sticks = (props) => {
  const [renderSticks, setRenderSticks] = useState([]);
  const [getNewArray, setGetNewArray] = useState(false);

  useEffect(() => {
    setRenderSticks([]);
    let stickObjects = [];

    for (let i = 0; i < props.amount; i++) {
      const stick = {
        height: Math.floor(Math.random() * 397) + 5,
        state: "none",
      };
      stickObjects.push(stick);
    }
    setRenderSticks(stickObjects);
  }, [props.amount, getNewArray]);

  return (
    <div>
      <div className="sticks-container">
        {renderSticks.map((stick, i) => {
          let stateColor = "red";

          switch (stick.state) {
            case "active":
              stateColor = "orange";
              break;
            case "passive":
              stateColor = "black";
              break;
            case "done":
              stateColor = "green";
              break;
            default:
              stateColor = "red";
              break;
          }

          return (
            <span
              key={i}
              className="stick"
              style={{
                height: stick.height + "px",
                backgroundColor: stateColor,
              }}
            ></span>
          );
        })}
      </div>
      <div>
        <button
          onClick={() => bblSort(renderSticks, setRenderSticks, props.speed)}
        >
          Bubble
        </button>
        <button
          onClick={() =>
            insertionSort(renderSticks, setRenderSticks, props.speed)
          }
        >
          Insertion
        </button>
        <button
          onClick={() =>
            cocktailSort(renderSticks, setRenderSticks, props.speed)
          }
        >
          Cocktail
        </button>
        <button
          onClick={() =>
            selectionSort(renderSticks, setRenderSticks, props.speed)
          }
        >
          Selection
        </button>
      </div>
      <hr />
      <button onClick={() => setGetNewArray(!getNewArray)}>New array</button>
    </div>
  );
};

export default Sticks;
