import React, { useState, useEffect } from "react";
import "./Sticks.css";
import bblSort from "../../../algorithms/bubbelSort";
import insertionSort from "../../../algorithms/insertionSort";
import cocktailSort from "../../../algorithms/cocktailSort";
import selectionSort from "../../../algorithms/selectionSort";

const Sticks = (props) => {
  const [renderSticks, setRenderSticks] = useState([]);
  const [running, setRunning] = useState(false);

  async function runSort(sort) {
    if (running) return;
    setRunning(true);
    await sort(renderSticks, setRenderSticks, props.speed);
    setRunning(false);
  }

  function newArray() {
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
  }

  useEffect(() => {
    newArray();
  }, [props.amount]);

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
              stateColor = "darkblue";
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
        <button disabled={running} onClick={() => runSort(bblSort)}>
          Bubble
        </button>
        <button disabled={running} onClick={() => runSort(insertionSort)}>
          Insertion
        </button>
        <button disabled={running} onClick={() => runSort(cocktailSort)}>
          Cocktail
        </button>
        <button disabled={running} onClick={() => runSort(selectionSort)}>
          Selection
        </button>
      </div>
      <hr />
      <button disabled={running} onClick={() => newArray()}>
        New array
      </button>
    </div>
  );
};

export default Sticks;
