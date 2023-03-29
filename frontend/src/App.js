import { useState } from "react";
import Core from "./pages/Core";
import { Button } from "./components/Button";

function App() {
  const [cores, setCore] = useState(0);
  const onAddClick = () => setCore(cores + 1);
  const onDelClick = () => setCore(cores - 1 <= 0 ? 0 : cores - 1);

  return (
    <div>
      <div>
        {Array.from({ length: cores }, (_, i) => (
          <Core core={i + 1} key={i} />
        ))}
      </div>
      <div style={{ display: "flex" }}>
        <Button onClick={onAddClick} value="addTask" />
        <Button onClick={onDelClick} value="delTask" />
      </div>
    </div>
  );
}

export default App;
