import { Button } from "@components/ui/button";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + {count} + React</h1>
      <div
        className="flex min-h-svh flex-col items-center justify-center"
        onClick={() => setCount((count) => count + 1)}
      >
        <Button>Click me</Button>
      </div>
    </>
  );
}

export default App;
