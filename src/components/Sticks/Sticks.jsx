import React, { useState, useEffect } from "react";
import "./Sticks.css";
import bblSort from "../../../algorithms/bubbelSort";

const Sticks = (props) => {
  const [renderSticks, setRenderSticks] = useState([]);

  useEffect(() => {
    setRenderSticks([]);
    let stickObjects = [];

    for (let i = 0; i < props.amount; i++) {
      const stick = {
        height: Math.floor(Math.random() * 60) + 5,
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
      <button onClick={() => bblSort(renderSticks, setRenderSticks)}>
        bbl sort
      </button>
    </div>
  );
};

export default Sticks;
