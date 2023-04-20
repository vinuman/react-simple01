import { useState } from "react";
import Box from "./Box";
import Field from "./Field";

function App() {
  const [colorValue, setColorValue] = useState("");

  return (
    <div>
      <Box colorValue={colorValue} />
      <Field colorValue={colorValue} setColorValue={setColorValue} />
    </div>
  );
}

export default App;
