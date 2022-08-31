import React, { useState, useEffect } from "react";
import "./Sticks.css";

const Sticks = (props) => {
  const [renderSticks, setRenderSticks] = useState([]);

  useEffect(() => {
    let stickObjects = [];

    for (let i = 0; i < props.amount; i++) {
      const stick = {
        height: Math.floor(Math.random() * 12) * 5 + 5,
      };
      stickObjects = [...stickObjects, stick];
    }

    setRenderSticks(stickObjects);
  }, [props.amount]);

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
