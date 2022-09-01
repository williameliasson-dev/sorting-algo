import { useState } from "react";

import "./App.css";
import Sticks from "./components/Sticks/Sticks";

function App() {
  const [amount, setAmount] = useState(100);

  return (
    <div>
      <Sticks amount={amount} />
      <input value={amount} onChange={(e) => setAmount(e.target.value)}></input>
    </div>
  );
}

export default App;
