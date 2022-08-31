import { useState } from "react";

import "./App.css";
import Sticks from "./components/Sticks/Sticks";

function App() {
  const [amount, setAmount] = useState(100);

  return (
    <div>
      <input value={amount} onChange={(e) => setAmount(e.target.value)}></input>
      <Sticks amount={amount} />
    </div>
  );
}

export default App;
