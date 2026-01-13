import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

function App() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://10.12.19.19:3000/api");
    setArray(response.data.fruits);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const [value, setValue] = React.useState<number>(30);
  const handleChange = (event: Event, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>fruit is {array[count % array.length]}</p>
      </div>
      <Box sx={{ width: 200, margin: "0 auto" }}>
        <Stack spacing={2} direction="row" sx={{ alignItems: "center", mb: 1 }}>
          <VolumeDown />
          <Slider aria-label="Volume" value={value} onChange={handleChange} />
          <VolumeUp />
        </Stack>
        at {value}%
      </Box>
    </>
  );
}

export default App;
