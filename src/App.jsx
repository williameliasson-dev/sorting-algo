import { useState } from "react";
import "./App.css";
import Sticks from "./components/Sticks/Sticks";

function App() {
  const [amount, setAmount] = useState(100);
  const [speed, setSpeed] = useState(1);

  return (
    <div>
      <Sticks amount={amount} speed={speed} />
      <div className="slider-container">
        <div>
          <input
            className="sticks-slider"
            type="range"
            min="10"
            max="100"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <span>Sticks: {amount}</span>
        </div>
        <div>
          <input
            className="sticks-slider"
            type="range"
            min="1"
            max="300"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
          <span>Speed: {speed}ms</span>
        </div>
      </div>
    </div>
  );
}

export default App;
