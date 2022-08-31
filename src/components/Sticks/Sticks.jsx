import React, { useState } from "react";
import "./Sticks.css";

const Sticks = (props) => {
  const [renderSticks, setRenderSticks] = useState([]);
  console.log(Math.floor(Math.random() * 10));

  for (let i = 0; i < props.amount; i++) {
    const stick = {
      height: Math.floor(Math.random() * 10) * 4 + 10,
    };

    renderSticks.push(stick);
  }

  console.log(renderSticks);

  return (
    <div className="sticks-container">
      {renderSticks.map((renderSticks, i) => {
        return (
          <span
            key={i}
            className="stick"
            style={{ height: renderSticks.height + "px" }}
          ></span>
        );
      })}
    </div>
  );
};

export default Sticks;
