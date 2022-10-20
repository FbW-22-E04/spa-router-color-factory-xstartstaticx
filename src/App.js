import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Colors from "./components/Colors";
import AddNewColor from "./components/AddNewColor";
import SingleColor from "./components/SingleColor";

function App() {
  const [selectColor, setSelectColor] = useState([
    { colorName: "red", colorValue: "#FF0000" },
    { colorName: "green", colorValue: "#00FF00" },
    { colorName: "blue", colorValue: "#0000FF" },
  ]);

  return (
    <Routes>
      <Route path="/" element={<Colors selectColor={selectColor} />} />
      <Route path="/colors" element={<Colors selectColor={selectColor} />} />
      <Route
        path="/colors/new"
        element={
          <AddNewColor
            selectColor={selectColor}
            setSelectColor={setSelectColor}
          />
        }
      />
      <Route
        path="/colors/:color"
        element={<SingleColor selectColor={selectColor} />}
      />
    </Routes>
  );
}

export default App;
