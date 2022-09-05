import React, { useState, useEffect } from "react";
import "./Sticks.css";
import bblSort from "../../../algorithms/bubbelSort";
import insertionSort from "../../../algorithms/insertionSort";

const Sticks = (props) => {
  const [renderSticks, setRenderSticks] = useState([]);

  useEffect(() => {
    setRenderSticks([]);
    let stickObjects = [];

    for (let i = 0; i < props.amount; i++) {
      const stick = {
        height: Math.floor(Math.random() * 391) + 5,
        state: "none",
      };
      stickObjects.push(stick);
    }

    setRenderSticks(stickObjects);
  }, [props.amount]);

  return (
    <div>
      <div className="sticks-container">
        {renderSticks.map((stick, i) => {
          let stateColor = "red";
          if (stick.state === "active") {
            stateColor = "orange";
          } else if (stick.state === "done") {
            stateColor = "green";
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
    </div>
  );
};

export default Sticks;
