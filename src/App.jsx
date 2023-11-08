import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tuotelista from "./components/Tuotelista";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tuotteet" element={<Tuotelista />} />
      </Routes>
    </Router>
  );
}

export default App;
