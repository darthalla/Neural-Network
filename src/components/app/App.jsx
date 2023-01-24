import React from "react";
import { Route, Routes } from "react-router-dom";
import Exhibition from "../exhibition/exhibition";
import Idea from "../idea/idea";
import "./App.css";
import "./rezet.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Idea />} />
        <Route path="/exhibition" element={<Exhibition />} />
      </Routes>
    </div>
  );
}

export default App;
