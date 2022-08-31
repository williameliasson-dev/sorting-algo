import { useState } from "react";

import "./App.css";
import Sticks from "./components/Sticks/Sticks";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Sticks amount={70} />
    </div>
  );
}

export default App;
